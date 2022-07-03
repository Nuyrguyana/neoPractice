import React from 'react';
import {ActionsComponent} from "./actionsComponent";

export const Card = ({created, type, status, actions, title}) => {
    return (
            <div className='card-container'>
                <h2 className='claim-title-media'>{title}</h2>
                <div className='card-content-first'>
                    <span className='card-body-title'>Created</span>
                    <span className='card-body-content'>{created}</span>
                </div>
                <div className='card-content'>
                    <span className='card-body-title'>Type</span>
                    <span className='card-body-content'>{type}</span>
                </div>
                <div className='card-content'>
                    <span className='card-body-title'>Status</span>
                    <span className='card-body-content'>{status}</span>
                </div>
            <ActionsComponent value={actions}/>
            </div>
    );
};
