import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from "react-router-dom";
import { SelectField } from "./selectField";
import axios from 'axios';
import { getToken } from '../api/jwtLocalStorage';

export const IncomingClaim = () => {
    const [claim, setClaim] = useState({})
    const [statuses, setStatuses] = useState([])
    const {claimId} = useParams()
    const history = useHistory()

    const handleAllClaims = () => {
        history.push('/');
    };

    useEffect(() => {
        // to prevent unsubscribe error #1
        let isSubscribed = true;

        axios.get(`http://localhost:3001/claim/${claimId}`, {
            headers: {
                Authorization: "Bearer " + getToken()
            }
        }).then((resp) => isSubscribed ? setClaim(resp.data) : null
        ).catch((error) => console.error(error))

        axios.get('http://localhost:3001/status', {
            headers: {
                Authorization: "Bearer " + getToken()
            }
        }).then((resp) => isSubscribed ? setStatuses(resp.data) : null
        ).catch((error) => console.error(error))

        // to prevent unsubscribe error #2
        return () => (isSubscribed = false)
    }, [])

    const handleStatusChange = (newStatus) => {
        console.log("newStatus", newStatus);
        const status = statuses.find((el) => el.name === newStatus)
        updateClaim({
            title: claim.title,
            description: claim.description,
            type: claim.type.slug,
            status: status.slug,
        })
    }

    const handleTextFieldChange = ({target}) => {
        setClaim((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const updateClaim = (updatedClaim) => {
        console.log('updatedClaim', updatedClaim)
        axios.put(`http://localhost:3001/claim/${claimId}`, updatedClaim, {
            headers: {
                Authorization: "Bearer " + getToken()
            }
        }).then((resp) => {
            console.log(resp)
            history.push('/')
        }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <form className='container-incoming-claim'>
            <h2 className='main-title'>Incoming claim</h2>
            <label className='label-claim'>TITLE</label>
            <input className='claim-editing'
                   placeholder={claim.title}
                   name='title'
                   onChange={handleTextFieldChange}
            />
            <div className='claim-type'>
                <label className='label-claim'>TYPE</label>
                <SelectField claim={claim} setClaim={setClaim}/>
            </div>
            <label className='label-claim'>DESCRIPTION</label>
            <input className='claim-editing'
                   placeholder={claim.description}
                   name='description'
                   onChange={handleTextFieldChange}
            />
            <div>
                <button className='btn-ic btn-cancel'
                        onClick={() => handleAllClaims()}>
                    Cancel
                </button>
                <button className='btn-ic btn-done'
                        onClick={() => handleStatusChange('Done')}>
                    Done
                </button>
                <button className='btn-ic btn-decline'
                        onClick={() => handleStatusChange('Declined')}>
                    Decline
                </button>
                <button className='btn-ic btn-inprogress'
                        onClick={() => handleStatusChange('In progress')}>
                    In progress
                </button>
            </div>
        </form>
    );
};

