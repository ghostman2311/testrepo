import React from "react";
import Head from "next/head";
import "./app.css";
import BackToHome from "../components/app/BackToHome";
import BackToTop from "../components/app/BackToTop";
import config from "../config";

const AppContainer = ({ Component, pageProps }: any) => {
  return (
    <>
      <Head>
        {config.debugMode ? (
          <script>self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;</script>
        ) : (
          <></>
        )}
        <link rel="shortcut icon" href="/profile.png" />
        <title> Nikhil Karnwal</title>
      </Head>
      <BackToHome />
      <main>
        <Component {...pageProps} />
        <BackToTop />
      </main>
    </>
  );
};

export default AppContainer;
