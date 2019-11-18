require('dotenv').config();

const cheerio = require('cheerio');
const { URL } = require('url');
const axios = require('axios');
const path = require('path');
const fs = require('fs-extra');
const attempt = require('promise-retry');
const https = require('https');
const md5 = require('md5');
const _ = require('lodash');
const Database = require('better-sqlite3');
const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');


const iPad = devices['iPad Pro landscape'];

const getData = async (urlString, filepath) => {
  if (urlString && filepath) {
    if (!await fs.pathExists(filepath)) {
      try {
        await fs.ensureDir(path.dirname(filepath));

        await attempt({ retries: 3, randomize: true }, async retry => {
          try {
            const { data } = await axios.get(urlString, { httpsAgent: new https.Agent({ rejectUnauthorized: false }), responseType: 'arraybuffer', });

            await fs.outputFile(filepath, data, { encoding: null, });
          } catch (e) {
            retry(e);
          }
        });
      } catch (e) {
        console.log(`取得失敗: ${urlString}`);
      }
    }
  }
};


module.exports = (async () => {

  let browser = null;
  let db = null;

  try {

    browser = await puppeteer.launch({ headless: false, slowMo: 100, });
    const [page] = await browser.pages();
    await page.emulate(iPad);


    await fs.ensureDir('data');

    db = new Database('data/list.sqlite');
    const insert = size => {
      const placeholder = (new Array(size)).fill('(?, ?, ?)').join(',');
      return db.prepare(`INSERT OR IGNORE INTO list VALUES ${placeholder}`);
    };
    db.prepare(`CREATE TABLE IF NOT EXISTS list (id TEXT, url TEXT, image TEXT, PRIMARY KEY(id))`).run();


    // 
    // 各詳細ページを順に取得
    // 

    let pageNo = 1;
    let lastPageNo = null;
    let listPageUrl = process.env.URL_LIST;

    do {
      try {
        await page.goto(`${listPageUrl}?pno=${pageNo}&p_isize=2`, { waitUntil: 'networkidle2', timeout: 300 * 1000 });

        const $ = cheerio.load(await page.content());

        if (!lastPageNo) {
          const pageNos = $('#pagerBottom li').toArray().map(el => $(el).text());
          lastPageNo = parseInt(pageNos[pageNos.length - 2]);
        }

        const items = (await Promise.all($('li.catalog-item').toArray().map(async item => {
          let result = null;

          try {
            const url = $('a.catalog-link', item).attr('href');
            const id = md5(url);

            const imageUrl = $('img.catalog-img', item).attr('data-src') || $('img.catalog-img', item).attr('src');

            const parsedUrl = new URL(imageUrl);
            const ext = path.extname(parsedUrl.pathname);
            const image = `data/images/${md5(imageUrl)}${ext}`;

            await getData(imageUrl, image);

            result = [id, url, image];
          } catch (e) {
            console.log(e);
          }

          return result;
        }))).filter(i => i);

        insert(items.length).run(_.flatten(items));
      } catch (e) {
        console.log(e);
      }

      await new Promise(resolve => setTimeout(() => resolve(), 3000));

      pageNo++;
    }
    while (pageNo < lastPageNo);
  } finally {
    try {
      db.close();
      await browser.close();
      browser = null;
    } catch (e) {
      console.trace(e);
    }
  }
})();
