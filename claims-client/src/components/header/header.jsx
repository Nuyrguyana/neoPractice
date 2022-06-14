import React from 'react';
import logOut from '../../image/icon-log-out.svg'
import notification from '../../image/Vector.svg'
import photo from '../../image/image 9.svg'
import {SearchBar} from "../searchBar";
import {useLocation} from "react-router-dom";
import {CLAIMS_ROUTE} from "../utils/consts";
import ellipseBell from '../../image/EllipseBell.svg'

export const Header = () => {
    const loc = useLocation()
    const isSearchbar = loc.pathname === CLAIMS_ROUTE
    return (
        <header className='header'>
            <div className='header-container'>
                <div className='header-inner'>
                    {/*<div className='burger-btn'>*/}
                    {/*    <span/>*/}
                    {/*</div>*/}
                    <div className='header-search-avatar'>
                        <div className='searchbar'>
                            {isSearchbar ? <SearchBar/> : <span></span>}
                        </div>
                        <div className='header-actions'>
                            <button className="btn-header-bell">
                                <img className='img-header' src={notification}/>
                                <img className='ellipseBell' src={ellipseBell}/>
                            </button>
                        </div>
                        <div className='avatar-container'>
                            <img className='avatar' src={photo}/>
                        </div>
                        <div className='name'>
                            <span>Ivan Ivanov</span>
                        </div>
                        <div className='header-actions'>
                            <button className="btn-header-exit">
                                <img src={logOut}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
        ;
};

