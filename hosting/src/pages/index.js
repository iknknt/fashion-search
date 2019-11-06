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
      <div css={css`
        width: 100%;
        height: 90px;
        background-color: red;
      `}>

      </div>

      <div css={css`
          width: 100%;
          height: 500px;
          background-color: blue;
      `}>

      </div>

      <div css={css`
        width: 100%;
        height: 90px;
        background-color: green;
      `}>


      </div>
    </React.Fragment>
  );
};

export default page(withTheme(Page));
