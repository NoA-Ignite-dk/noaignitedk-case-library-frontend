import React from 'react';
import Head from 'next/head';
import { Segment } from 'components/segment/Segment';

const ErrorPage = (): JSX.Element => (
    <>
        <Head>
            <title>404 Not Found</title>
        </Head>

        <Segment>
            <h1>Page was not found</h1>
        </Segment>
    </>
);

export default ErrorPage;
