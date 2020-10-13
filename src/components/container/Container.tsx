import React, { ReactNode } from 'react';

import s from './Container.module.scss';

interface ContainerProps {
    children: ReactNode;
}

export const Container = ({ children }: ContainerProps): JSX.Element => (
    <section className={s.container}>{children}</section>
);
