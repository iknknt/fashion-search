import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import theme from 'common/theme';
import { Global, css } from '@emotion/core'


export default Component => props => <ThemeProvider theme={theme}>
  <Global styles={css`
    html {
      font-size: 14px;
      font-family: "Noto Sans JP", sans-serif;
      ${'' /* font-family: "Noto Sans CJK JP", "Noto Sans JP", sans-serif;
      font-feature-settings: "palt", "pkna", "frac", "kern"; */}
      font-kerning: normal;
      font-weight: 300;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    a:hover,
    a:active {
      text-decoration: underline;
    }
  `}
  />
  <Component {...props} />
</ThemeProvider>;
