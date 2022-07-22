import React, { useState } from 'react';
import { Menu } from "../components/Menu/menu";
import { Header } from "../components/Header/header";
import { Redirect, Route } from "react-router-dom";
import { CLAIMS_ROUTE } from "../utils/consts";

export const Main = ({ authRoutes }) => {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <div className='wrapper'>
            <Menu
                active={ menuActive }
                setActive={ setMenuActive }
            />

            <Header
                menuActive={ menuActive }
                setMenuActive={ setMenuActive }
            />

            {
                authRoutes.map(({ path, Component }) =>
                    <Route key={ path } path={ path } component={ Component } exact/>)
            }

            <Redirect to={ CLAIMS_ROUTE }/>
        </div>
    );
};

