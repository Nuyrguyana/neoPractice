import React from 'react';
import logOut from '../../image/icon-log-out.svg'
import notification from '../../image/Vector.svg'

export const Header = () => {
    return (
        <div className='container-header'>
            <div className='content-header'>
                <button className="btn-header-bell">
                    <img src={notification}/>
                </button>
                <button className="btn-header-exit">
                    <img src={logOut}/>
                </button>
            </div>
        </div>
    );
};

