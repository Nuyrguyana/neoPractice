import React, { useState } from 'react';
import { Switch } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Main } from "../container/main";
import { AuthContainer } from "./authContainer";

export const AppRouter = () => {
    const [isAuth, setAuth] = useState(true)
    return (
        isAuth ?
            <Switch>
                <Main authRoutes={authRoutes}/>
            </Switch>
            :
            <Switch>
                <AuthContainer publicRoutes={publicRoutes}/>
            </Switch>
    );
};

