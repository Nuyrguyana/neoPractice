import React from 'react';
import {Link} from "react-router-dom";

export const ActionsComponent = ({value}) => {

    return (
        <div>
            <Link className='actions' to={'/ic/' + value}>BROWSE</Link>
        </div>
    );
};

