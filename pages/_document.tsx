import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="images/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="images/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="images/favicon-16x16.png"
                    />
                    <link
                        rel="mask-icon"
                        href="images/safari-pinned-tab.svg"
                        color="#000"
                    />
                    <meta name="msapplication-TileColor" content="#000" />
                    <meta name="theme-color" content="#ffffff" />
                    <meta
                        property="twitter:card"
                        content="summary_large_image"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
