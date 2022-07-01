import React, {useEffect, useState} from 'react';
import claimsAPI from '../api/fake.api'
import {useParams} from "react-router-dom";


export const SelectField = () => {
    const [claim, setClaim] = useState({})
    const {claimId} = useParams()

    useEffect(() => {
        claimsAPI
            .getById(claimId)
            .then(data => setClaim(data))
    }, [])
    return (
        <select className='type-select'>
            <option> {claim.type}</option>
            <option> hardware</option>
            <option> tr</option>

        </select>
    );
};

