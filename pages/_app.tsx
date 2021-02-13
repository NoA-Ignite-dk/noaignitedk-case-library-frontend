import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import "styles/base.scss";
import AppLayout from "components/app-layout/AppLayout";

const Layout = ({ Component, pageProps }: AppProps) => (
    <AppLayout>
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1, viewport-fit=cover' />
        </Head>
        <Component {...pageProps} />
    </AppLayout>
);

export default Layout;
