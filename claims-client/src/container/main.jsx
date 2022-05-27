import React from 'react';
import Menu from "../components/menu";
import {Header} from "../components/header/header";
import ClaimsTable from "./claimsTable";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import IncomingClaim from "../components/incomingClaim";
import {Time} from "../components/menu/time";
import {Link} from "../components/menu/link";
import {Currency} from "../components/menu/currency";
import {Score} from "../components/menu/score";
import {Map} from "../components/menu/map";

export const Main = () => {
    return (
        <BrowserRouter>
            <div className='page'>
                <Menu/>
                <Header/>
                <Switch>
                    <Route path='/' exact component={ClaimsTable}/>
                    <Route path='/ic/:claimId?' exact component={IncomingClaim}/>
                    <Route path='/link' exact component={Link}/>
                    <Route path='/score' exact component={Score}/>
                    <Route path='/time' exact component={Time}/>
                    <Route path='/currency' exact component={Currency}/>
                    <Route path='/map' exact component={Map}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

