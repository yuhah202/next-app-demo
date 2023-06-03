import React from "react";
import { NextComponentType, NextPageContext } from "next";

import 'styles/global.css'

export default function App({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}
