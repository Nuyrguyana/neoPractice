import React from 'react';
import { BrowseButton } from "../../shared/browseButton";
import { StatusPill } from '../../shared/statusPill';
import { TypeDot } from '../../shared/typeDot';

export const Card = ({ created, type, status, actions, title }) => {
    return (
        <div className='card-container'>
            <h2 className='claim-title-media'>{ title }</h2>

            <div className='card-content-first'>
                <span className='card-body-title'>Created</span>
                <span className='card-body-content'>{ created }</span>
            </div>

            <div className='card-content'>
                <span className='card-body-title'>Type</span>
                <TypeDot value={ type }/>
            </div>

            <div className='card-content'>
                <span className='card-body-title'>Status</span>
                <StatusPill value={ status }/>
            </div>

            <BrowseButton value={ actions }/>
        </div>
    );
};

