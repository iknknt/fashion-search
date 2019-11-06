import React from "react";
import page from 'common/page';
import breakpoints from 'common/breakpoints';
import { withTheme } from '@material-ui/styles';
import { css } from '@emotion/core';

const Page = () => {

  console.log(css);

  return (
    <React.Fragment>
      {/* <Head>
      </Head> */}
      <main>
        <div css={css`
            width: 300px;
            height: 300px;
            background-color: red;
            position: fixed;
            top:0;
            margin: 32px;
        `}>

          <div css={css`
            padding: 32px;
          `}>
            <div css={css`
              width: 100px;
              height: 100px;
              background-color: blue;
              // margin: 0 auto;

              // position: absolute;
              // top: 50%;
              // left:50%;
              // transform: translate(-50%, -50%);
            `}></div>
          </div>
        </div>
        <div css={css`
        margin-top: 360px;
        `}>

        <div css={css`
          ${breakpoints.md.up}  {
            display: flex;

          }
        `}>

          <div css={css`
            width: 100%;
            height: 100px;
            background-color: blue;
          `}></div>
          <div css={css`
            width: 100%;
            height: 100px;
            background-color: green;
          `}></div>
          <div css={css`
            width: 100%;
            height: 100px;
            background-color: red;
          `}></div>
          </div>

          <h1>aaa</h1>
          <p>みなさんこんにちは。ここは<strong>スターバックス</strong>です。</p>
          <span>span</span>
          <span>span2</span>
          <input type="text"></input>
          <div>

          <img height={300} src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Hawaii_Sunset.jpg" />
          </div>
          <div>

          <img height={300} src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Hawaii_Sunset.jpg" />
          </div>
          <div>

          <img height={300} src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Hawaii_Sunset.jpg" />
          </div>
          <div>

          <img height={300} src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Hawaii_Sunset.jpg" />
          </div>
          <div>

          <img height={300} src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Hawaii_Sunset.jpg" />
          </div>
          <div>

          <img height={300} src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Hawaii_Sunset.jpg" />
          </div>
        </div>
      </main>
    </React.Fragment>
  )};

  export default page(withTheme(Page));