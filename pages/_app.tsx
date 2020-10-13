import React from "react";
import { AppProps } from "next/app";

import "styles/base.scss";
import AppLayout from "components/app-layout/AppLayout"

const Layout = ({ Component, pageProps }: AppProps) => (
    <AppLayout>
        <Component {...pageProps} />
    </AppLayout>
);

export default Layout;
