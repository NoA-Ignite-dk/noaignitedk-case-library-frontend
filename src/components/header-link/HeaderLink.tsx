import React from 'react';
import { Link } from 'components/link/Link';

import s from './HeaderLink.module.scss';

interface HeaderLinkProps {
    name: string;
    to: string;
}

export const HeaderLink = ({ name, to }: HeaderLinkProps) => {
    const isLink = typeof to !== 'undefined';
    const isExternal = isLink && /^((https?:)?\/\/|[0-9a-zA-Z]+:)/.test(to || '');

    const content = () => <>{name}</>;

    if (isExternal) {
        return (
            <a className={s.link} target="_blank" rel="noopener noreferrer" href={to}>
                {content()}
            </a>
        );
    }

    return (
        <Link className={s.link} to={to}>
            {content()}
        </Link>
    );
};
