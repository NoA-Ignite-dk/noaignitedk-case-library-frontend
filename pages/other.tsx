import React from 'react';
import { Helmet } from 'react-helmet';
import { Intro } from 'components/intro/Intro';

const Other = (): JSX.Element => (
    <>
        <Helmet title="Other page" />
        <Intro>Other page</Intro>
    </>
);

export default Other;
