import React from 'react';
import { Link } from "react-router-dom";

export const MenuItem = ({ path, title, img, textContent, setActive }) => {
    return (
        <div onClick={ () => setActive(!setActive) }>
            <Link to={ path } title={ title } className="btn-menu">
                <img src={ img }/>
                <span className='title-menu'>{ textContent }</span>
            </Link>
        </div>
    );
};

