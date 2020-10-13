import React from 'react';
import { Helmet } from 'react-helmet';
import { Segment } from 'components/segment/Segment';

const ErrorPage = (): JSX.Element => (
    <>
        <Helmet title="404 Not Found" />

        <Segment>
            <h1>Page was not found</h1>
        </Segment>
    </>
);

export default ErrorPage;
