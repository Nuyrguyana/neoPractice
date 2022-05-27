import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from "react-router-dom";
import claimsAPI from '../api/fake.api'
import {SelectField} from "./selectField";

const IncomingClaim = () => {
    const [claim, setClaim] = useState({})
    const {claimId} = useParams()
    const history = useHistory()

    const handleAllClaims = () => {
        history.push('/');
    };


    useEffect(() => {
        claimsAPI
            .getById(claimId)
            .then(data => setClaim(data))
    }, [])

    return (
        <div className='container-incoming-claim'>
            <h2 className='main-title'><b>Incoming claim</b></h2>
            <label className='label-claim'>TITLE</label>
            <input className='claim-editing'
                   placeholder={claim.title}/>
            <div className='claim-type'>
                <label className='label-claim'>TYPE</label>
                <SelectField/>
            </div>
            <label className='label-claim'>DESCRIPTION</label>
            <input className='claim-editing'/>
            <div>
                <button className='btn-ic btn-cancel'
                        onClick={() => {
                            handleAllClaims()
                        }}>Cancel
                </button>
                <button className='btn-ic btn-done'>Done</button>
                <button className='btn-ic btn-decline'>Decline</button>
            </div>
        </div>
    );
};

export default IncomingClaim;