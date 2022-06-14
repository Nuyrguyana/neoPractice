import React from 'react';
import iconMin from '../../image/iconMin.png'
import iconHome from '../../image/icon-home.svg'
import iconGlobe from '../../image/icon-globe.svg'
import iconArchive from '../../image/icon-archive.svg'
import iconPieChart from '../../image/icon-pie-chart.svg'
import iconDollarSign from '../../image/icon-dollar-sign.svg'
import iconDatabase from '../../image/icon-database.svg'
import iconNavigation from '../../image/icon-navigation.svg'
import {Link} from "react-router-dom";

export const Menu = ({active, setActive}) => {
    return (
        <div className='menu-container'>
            <div className='blackout'>
                <div className='menu-inner'>
                    <div className='img-icon-container'>
                        <img className='img-icon' src={iconMin}/>
                    </div>
                    <Link to='/' title='home' className="btn-menu">
                        <img src={iconHome}/>
                        <span className='title-menu'>Home</span>
                    </Link>
                    <Link to='/globe' title='globe' className="btn-menu">
                        <img src={iconGlobe}/>
                        <span className='title-menu'>Services</span>
                    </Link>
                    <Link to='/archive' title='archive' className="btn-menu">
                        <img src={iconArchive}/>
                        <span className='title-menu'>Storage</span>
                    </Link>
                    <Link to='/chart' title='chart' className="btn-menu">
                        <img src={iconPieChart}/>
                        <span className='title-menu'>Charts</span>
                    </Link>
                    <Link to='/sign' title='sign' className="btn-menu">
                        <img src={iconDollarSign}/>
                        <span className='title-menu'>Currency</span>
                    </Link>
                    <Link to='/database' title='database' className="btn-menu">
                        <img src={iconDatabase}/>
                        <span className='title-menu'>Base</span>
                    </Link>
                    <Link to='/navigation' title='navigation' className="btn-menu">
                        <img src={iconNavigation}/>
                        <span className='title-menu'>Location</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

