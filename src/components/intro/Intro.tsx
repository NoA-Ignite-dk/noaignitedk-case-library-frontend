import React, { ReactNode } from 'react';

import { Container } from 'components/container/Container';
import { Row } from 'components/row/Row';

import s from './Intro.module.scss';

interface IntroProps {
    children: ReactNode;
}

export const Intro = ({ children }: IntroProps): JSX.Element => (
    <Container>
        <div className={s.intro}>
            <Row>
                <div className={s.intro__col}>
                    <p className={s.intro__text}>{children}</p>
                </div>
            </Row>
        </div>
    </Container>
);
