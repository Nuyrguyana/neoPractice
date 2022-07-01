import React from 'react';
import {Link} from "react-router-dom";

export const MenuItem = ({path, title, img, textContent, setActive}) => {
    return (
        <div>
            <Link to={path} title={title} className="btn-menu">
                <img src={img}/>
                <span className='title-menu' onClick={() => setActive(!setActive)}>{textContent}</span>
            </Link>
        </div>
    );
};

