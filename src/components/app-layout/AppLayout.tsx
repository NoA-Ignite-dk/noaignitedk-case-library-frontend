import React, { ReactNode } from "react";

import HGWLogo from "assets/svg/noaignite-logo.svg";
import { Header } from "components/header/Header";
import { HeaderLink } from "components/header-link/HeaderLink";
import { MetaTags } from "utils/meta";
import s from "./AppLayout.module.scss";

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => (
    <div className={s.layout}>
        <MetaTags />
        <Header>
            <HeaderLink name="Create new case" to="/form" />
        </Header>

        {children}
    </div>
);

export default AppLayout;
