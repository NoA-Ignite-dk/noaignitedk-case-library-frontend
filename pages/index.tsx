import React from 'react';
import Head from 'next/head';
import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/highlight/Highlight';
import { Container } from 'components/container/Container';
import { Button } from 'components/button/Button';

const Index = (): JSX.Element => (
    <>
        <Head>
            <title>Home</title>
        </Head>

        <Intro>
            Starter for Hello Great Works, using opinionated dependencies:
            <br />
            <Highlight>TypeScript</Highlight>, <Highlight>SCSS</Highlight>, <Highlight>CSS Modules</Highlight>,{' '}
            <Highlight>root resolver</Highlight> &amp; some love.
            <br />
            <br />
            <Button href="https://github.com/Hello-Group/hgw-next-template">GitHub</Button>
        </Intro>

        <Container>
            <br />
            Based on CRA starter by{' '}
            <a href="https://github.com/ueno-llc/ueno-cra-starter" target="_blank" rel="noopener noreferrer">
                Ueno
            </a>
            .
        </Container>
    </>
);

export default Index;
