import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { SelectField } from "./selectField";
import axios from 'axios';
import { getToken } from '../api/jwtLocalStorage';

export const IncomingClaim = () => {
    const [claim, setClaim] = useState({})
    const {claimId} = useParams()
    const history = useHistory()

    const handleAllClaims = () => {
        history.push('/');
    };


    useEffect(() => {
        axios.get(`http://localhost:3001/claim/${claimId}`, {
            headers: {
                Authorization: "Bearer " + getToken()
            }
        }).then((resp) => {
            console.log("claim by id", resp.data);
        })
    }, [])

    const handleClick = () => {

        history.push('/')
    }

    return (
        <div className='container-incoming-claim'>
            <h2 className='main-title'>Incoming claim</h2>
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
                <button className='btn-ic btn-done'
                        onClick={() => {
                            handleClick()
                        }}>Done
                </button>
                <button className='btn-ic btn-decline'
                        onClick={() => {
                            handleAllClaims()
                        }}>Decline
                </button>
            </div>
        </div>
    );
};

