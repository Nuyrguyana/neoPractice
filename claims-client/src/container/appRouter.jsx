import React, { useEffect, useState } from 'react';
import { Switch } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Main } from "./main";
import { AuthContainer } from "../components/Auth/authContainer";
import { useDispatch } from 'react-redux';
import { isTokenValid } from '../api/jwtLocalStorage';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [isAuth, setAuth] = useState(isTokenValid)

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
                <Main authRoutes={ authRoutes }/>
            </Switch>
            :
            <Switch>
                <AuthContainer publicRoutes={ publicRoutes }/>
            </Switch>
    );
};

