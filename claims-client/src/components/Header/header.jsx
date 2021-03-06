import React from 'react';
import logOut from '../../image/icon-log-out.svg'
import notification from '../../image/Vector.svg'
import photo from '../../image/image 9.svg'
import { SearchBar } from "./searchBar";
import { useLocation } from "react-router-dom";
import { CLAIMS_ROUTE } from "../../utils/consts";
import ellipseBell from '../../image/EllipseBell.svg'
import { useSelector } from 'react-redux';
import { deleteToken } from '../../api/jwtLocalStorage';
import './index.css'

export const Header = ({ menuActive, setMenuActive }) => {
    const { setAuth } = useSelector(state => state)
    const location = useLocation()
    const isSearchbar = location.pathname === CLAIMS_ROUTE

    const handleLogout = () => {
        deleteToken()
        setAuth(false)
    }

    return (
        <header className='header'>
            <div className='header-container'>
                <div className='header-inner'>
                    <div className='burger-btn' onClick={ () => setMenuActive(!menuActive) }>
                        <span/>
                    </div>

                    <div className='header-search-avatar'>
                        <div className='searchbar'>
                            { isSearchbar ? <SearchBar/> : <span></span> }
                        </div>

                        <div className='header-actions'>
                            <button className="btn-header-bell">
                                <img className='img-header' src={ notification }/>
                                <img className='ellipseBell' src={ ellipseBell }/>
                            </button>
                        </div>

                        <div className='avatar-container'>
                            <img className='avatar' src={ photo }/>
                        </div>

                        <div className='name'>
                            <span>Ivan Ivanov</span>
                        </div>

                        <div className='header-actions'>
                            <button className="btn-header-exit" onClick={ handleLogout }>
                                <img src={ logOut }/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

