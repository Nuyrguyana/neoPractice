import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { SelectField } from "../../shared/selectField";
import axios from 'axios';
import { handleTextFieldChange } from '../../utils/handlers';
import './index.css'
import {
    axiosGetClaimById,
    axiosGetStatus,
    axiosUpdateClaimById,
    requestConfig,
    SERVER_PATH
} from '../../api/axiosRequest';

export const IncomingClaim = () => {
    const [claim, setClaim] = useState({})
    const [statuses, setStatuses] = useState([])
    const { claimId } = useParams()
    const history = useHistory()

    const handleAllClaims = () => {
        history.push('/');
    };

    useEffect(() => {
        // to prevent unsubscribe error #1
        let isSubscribed = true;

        axiosGetClaimById(claimId)
            .then((resp) => isSubscribed ? setClaim(resp.data) : null)
            .catch((error) => console.error(error))

        axiosGetStatus()
            .then((resp) => isSubscribed ? setStatuses(resp.data) : null)
            .catch((error) => console.error(error))

        // to prevent unsubscribe error #2
        return () => (isSubscribed = false)
    }, [])

    const handleStatusChange = (newStatus) => {
        const status = statuses.find((el) => el.name === newStatus)
        updateClaim({
            title: claim.title,
            description: claim.description,
            type: claim.type.slug,
            status: status.slug,
        })
    }

    const updateClaim = (updatedClaim) => {
        axiosUpdateClaimById(claimId, updatedClaim)
            .then((resp) => {
                history.push('/')
            })
            .catch(error => console.error(error))
    }

    return (
        <form className='container-incoming-claim'>
            <h2 className='main-title'>Incoming claim</h2>
            <label className='label-claim'>TITLE</label>
            <input className='claim-editing'
                   placeholder={ claim.title }
                   name='title'
                   onChange={ (event) => handleTextFieldChange(event, setClaim) }
            />

            <div className='claim-type'>
                <label className='label-claim'>TYPE</label>
                <SelectField claim={ claim } setClaim={ setClaim }/>
            </div>

            <label className='label-claim'>DESCRIPTION</label>
            <input className='claim-editing'
                   placeholder={ claim.description }
                   name='description'
                   onChange={ (event) => handleTextFieldChange(event, setClaim) }
            />

            <div>
                <button className='btn-ic btn-cancel'
                        onClick={ () => handleAllClaims() }
                >
                    Cancel
                </button>
                <button className='btn-ic btn-done'
                        onClick={ () => handleStatusChange('Done') }
                >
                    Done
                </button>
                <button className='btn-ic btn-decline'
                        onClick={ () => handleStatusChange('Declined') }
                >
                    Decline
                </button>
                <button className='btn-ic btn-inprogress'
                        onClick={ () => handleStatusChange('In progress') }
                >
                    In progress
                </button>
            </div>
        </form>
    );
};

