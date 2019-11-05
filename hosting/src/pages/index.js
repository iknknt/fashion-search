import React from "react";
import page from 'common/page';
import Hello from 'components/Hello';
import HelloState from 'components/HelloState';
import { withTheme } from '@material-ui/styles';
import { css } from '@emotion/core'


const Sample = ({ message }) => {
  return (<p>{message}</p>);
};

const Page = ({ theme }) => {

  return (
    <React.Fragment>
      <header>
        <div className="header-right">
            <a className="home" href="index.html">ホーム</a>
            <a className="mypage"  href="#" id="login-show">マイページ</a>
        </div>
      </header>

      <main>
        <div css={css`
          background-color: red;
        `}>
            <h1>Osoro.</h1>
            <h2>「ーーーーーーーーーーーーーーーーーーーーーーーーーー」</h2>
        </div>
      </main>

      <footer>
        <div class="footer-left">
            <a href="#">運営会社について</a>
            <a href="#">ご利用規約</a>
            <a href="#">プライバシーポリシー</a>
            <a href="#">お問い合わせ</a>
        </div>
        <div class="footer-right">©Osoro. inc.</div>
      </footer>
    </React.Fragment>
  );
};

export default page(withTheme(Page));
