import React from 'react';
import Head from 'next/head';
import { Intro } from 'components/intro/Intro';

const Other = (): JSX.Element => (
    <>
        <Head>
            <title>Other page</title>
        </Head>
        <Intro>Other page</Intro>
    </>
);

export default Other;
