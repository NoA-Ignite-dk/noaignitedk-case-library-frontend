import React, { ReactNode } from "react";

import { Link } from "components/link/Link";
import HGWLogo from "assets/svg/noaignite-logo.svg";

import s from "./Header.module.scss";

interface HeaderProps {
    children?: ReactNode;
}

export const Header = ({ children }: HeaderProps): JSX.Element => (
    <header className={s.header}>
        <div className={s.header__container}>
            <div className={s.header__content}>
                <Link to="/" className={s.header__logo}>
                    <HGWLogo className={s.header__logoSvg} />
                </Link>

                <div className={s.header__navigation}>{children}</div>
            </div>
        </div>
    </header>
);
