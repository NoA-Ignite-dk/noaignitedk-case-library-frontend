import React, { ReactNode } from 'react';

import s from './Highlight.module.scss';

interface HighlightProps {
    children: ReactNode;
}

export const Highlight = ({ children }: HighlightProps): JSX.Element => {
    return <span className={s.highlight__text}>{children}</span>;
};
