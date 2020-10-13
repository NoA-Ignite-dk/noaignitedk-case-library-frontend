import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";

import HGWLogo from "assets/svg/hgw-logo-white.svg";
import { Header } from "components/header/Header";
import { HeaderLink } from "components/header-link/HeaderLink";
import { Footer } from "components/footer/Footer";
import { helmet } from "utils/helmet";
import s from "./AppLayout.module.scss";

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => (
    <div className={s.layout}>
        <Helmet {...helmet} />

        <Header>
            <HeaderLink name="Other page" to="/other" />
        </Header>

        {children}

        <Footer logo={<HGWLogo />} />
    </div>
);

export default AppLayout;
