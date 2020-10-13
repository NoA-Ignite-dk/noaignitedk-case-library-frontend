import React, { ReactNode } from 'react';

import s from './Row.module.scss';

interface RowProps {
    children: ReactNode;
}

export const Row = ({ children }: RowProps): JSX.Element => <div className={s.row}>{children}</div>;
