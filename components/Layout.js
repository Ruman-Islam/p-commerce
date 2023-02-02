import Head from "next/head";
import React from "react";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - pCommerce" : "pCommerce"}</title>
        <meta name="description" content="pCommerce website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>header</header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
};

export default Layout;
