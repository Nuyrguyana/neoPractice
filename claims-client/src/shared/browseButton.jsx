import React from 'react';
import { Link } from "react-router-dom";

export const BrowseButton = ({ value }) => {
    return (
        <div>
            <Link className='actions' to={ '/ic/' + value }>Browse</Link>
        </div>
    );
};

