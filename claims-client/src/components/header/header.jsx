import React from 'react';
import logOut from '../../image/icon-log-out.svg'
import notification from '../../image/Vector.svg'
import photo from '../../image/image 9.png'
import {SearchBar} from "../searchBar";

export const Header = () => {
    return (
        <div className='container-header'>
            <div className='content-header'>
                <SearchBar/>
                <button className="btn-header-bell">
                    <img src={notification}/>
                </button>
                    <img className='avatar' src={photo}/>
                <div className='container-avatar'>
                    <p>Ivan Ivanov</p>
                </div>
                <button className="btn-header-exit">
                    <img src={logOut}/>
                </button>
            </div>
        </div>
    );
};

