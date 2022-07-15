import React, { useState, useEffect } from 'react';
import { Switch } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Main } from "../container/main";
import { AuthContainer } from "./authContainer";
import { useDispatch } from 'react-redux';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [isAuth, setAuth] = useState(false)

    useEffect(() => {
        dispatch({
            type: 'AUTH', payload: {
                setAuth: setAuth
            }
        })
    })

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

