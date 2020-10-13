import React, { ReactNode } from 'react';

import { Container } from 'components/container/Container';

import s from './Footer.module.scss';

interface FooterProps {
    logo: ReactNode;
}

export const Footer = ({ logo }: FooterProps): JSX.Element => (
    <div className={s.footer}>
        <Container>
            <div className={s.footer__content}>
                <a href="https://hellogreatworks.com" target="_blank" rel="noopener noreferrer">
                    {logo}
                </a>
            </div>
        </Container>
    </div>
);
