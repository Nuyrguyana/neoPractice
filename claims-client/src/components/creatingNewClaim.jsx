import React from 'react';
import {useHistory} from "react-router-dom";
// import {SelectField} from "./selectField";

export const CreatingNewClaim = () => {
    const history = useHistory()

    const handleAllClaims = () => {
        history.push('/');
    };

    return (
        <div className='container-incoming-claim'>
            <h2 className='main-title'><b>Creating new claim</b></h2>
            <label className='label-claim'>TITLE</label>
            <input className='claim-editing'
                   placeholder='Type claim title'/>
            <div className='claim-type'>
                <label className='label-claim'>TYPE</label>
                <select className='type-select'>
                <option> software</option>
                <option> hardware</option>
                <option> tr</option>

            </select>
            </div>
            <label className='label-claim'>DESCRIPTION</label>
            <input className='claim-editing'
            placeholder='Type claim description'/>
            <div>
                <button className='btn-ic btn-cancel'
                        onClick={() => {
                            handleAllClaims()
                        }}>Cancel
                </button>
                <button className='btn-ic btn-done'>Create</button>
            </div>
        </div>
    );
};

