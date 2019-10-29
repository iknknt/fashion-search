import React from "react";
import { Helmet } from "react-helmet";

export default ({ children }) => (
  <Helmet defaultTitle='Sample Firebase Project' titleTemplate={`%s | Sample Firebase Project`}>
    {/* <meta name="description" content="" /> */}
    {children}
  </Helmet>
);
