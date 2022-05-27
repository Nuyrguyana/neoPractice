import React from 'react';
import {Menu} from "../components/menu";
import {Header} from "../components/header/header";
import ClaimsTable from "./claimsTable";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import IncomingClaim from "../components/incomingClaim";
import {Chart} from "../components/menu/chart";
import {Globe} from "../components/menu/globe";
import {Sign} from "../components/menu/sign";
import {Archive} from "../components/menu/archive";
import {Database} from "../components/menu/database";
import {Navigation} from "../components/menu/navigation";

export const Main = () => {
    return (
        <BrowserRouter>
            {/*<div className='page'>*/}
                <Menu/>
                <Header/>
                <Switch>
                    <Route path='/' exact component={ClaimsTable}/>
                    <Route path='/ic/:claimId?' exact component={IncomingClaim}/>
                    <Route path='/globe' exact component={Globe}/>
                    <Route path='/archive' exact component={Archive}/>
                    <Route path='/chart' exact component={Chart}/>
                    <Route path='/sign' exact component={Sign}/>
                    <Route path='/database' exact component={Database}/>
                    <Route path='/navigation' exact component={Navigation}/>
                </Switch>
            {/*</div>*/}
        </BrowserRouter>
    );
};

