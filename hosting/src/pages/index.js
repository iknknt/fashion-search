import React from "react";
import page from 'common/page';
import { withTheme } from '@material-ui/styles';
import { css } from '@emotion/core'


const Sample = ({ message }) => {
  return (<p>{message}</p>);
};

const Page = ({ theme }) => {

  return (
    <React.Fragment>
      <div css={css`
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      `}>
        <div css={css`

        `}>
          <a href="#" css={css`
            margin-right: 2rem;
          `}>ホーム</a>
          <a href="#" css={css`
            margin-right: 3rem;
          `}>マイページ</a>
        </div>
      </div>

      <div css={css`
          width: 100%;
          height: 150px;
          display: flex;
	        text-align: center;
          justify-content: center;
          align-items: center;
      `}>
        <div css={css`
          
        `}>
          <h1 css={css`
            font-size: 50px;
          `}>Osoro.</h1>
          <h2 css={css`
            font-size: 15px;
          `}>「ーーーーーーーーーーーーーーーーーーーーーーーーーー」</h2>
        </div>
      </div>

      <div css={css`
          width: 100%;
          height: 350px;
          display: flex;
	        align-items: center;
	        justify-content: center;
      `}>
        <div>
        <form
          action="#"
          method="post"
          enctype="multipart/form-data"
        >
          <div>
          <label for="file_upload">画像ファイルを選択して下い
            <input type="file" ></input>
              <button type="submit">検索</button>
          </label>
          </div>
        </form>
        </div>
      </div>

      <div css={css`
        width: 100%;
        height: 90px;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
      `}>
        <div>
          <a href="#" css={css`
            margin-left: 3rem;
          `}>運営会社について</a>
          <a href="#" css={css`
            margin-left: 2rem;
          `}>ご利用規約</a>
          <a href="#" css={css`
            margin-left: 2rem;
          `}>プライバシーポリシー</a>
          <a href="#" css={css`
            margin-left: 2rem;
          `}>お問い合わせ</a>
        </div>
        <div css={css`
          margin-left: auto;
          margin-right: 3rem;
        `}>©Osoro. inc.</div>
      </div>
    </React.Fragment>
  );
};

export default page(withTheme(Page));
