import React from 'react';
import iconMin from '../image/iconMin.png'
import iconHome from '../image/icon-home.svg'
import iconGlobe from '../image/icon-globe.svg'
import iconArchive from '../image/icon-archive.svg'
import iconPieChart from '../image/icon-pie-chart.svg'
import iconDollarSign from '../image/icon-dollar-sign.svg'
import iconDatabase from '../image/icon-database.svg'
import iconNavigation from '../image/icon-navigation.svg'
import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div className='container-navbar'>
            <aside className='content-menu'>
                <p>
                    <img className='img-icon' src={iconMin}/>
                </p>
                <Link to='/' title='home' className="btn-menu">
                    <img src={iconHome}/>
                </Link>
                <Link to='/globe' title='globe' className="btn-menu">
                    <img src={iconGlobe}/>
                </Link>
                <Link to='/archive' title='archive' className="btn-menu">
                    <img src={iconArchive}/>

                </Link>
                <Link to='/chart' title='chart' className="btn-menu">
                    <img src={iconPieChart}/>

                </Link>
                <Link to='/sign' title='sign' className="btn-menu">
                    <img src={iconDollarSign}/>

                </Link>
                <Link to='/database' title='database' className="btn-menu">
                    <img src={iconDatabase}/>

                </Link>
                <Link to='/navigation' title='navigation' className="btn-menu">
                    <img src={iconNavigation}/>
                </Link>
            </aside>
        </div>
    );
};

