import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { handleTextFieldChange } from '../../utils/handlers';
import { axiosCreateClaim, axiosGetTypes } from '../../api/axiosRequest';
import './index.css'

export const CreatingNewClaim = () => {
    const history = useHistory()
    const [claim, setClaim] = useState({})
    const [types, setTypes] = useState([])

    useEffect(() => {
        // to prevent unsubscribe error #1
        let isSubscribed = true;

        axiosGetTypes()
            .then((resp) => {
                const typeArray = resp.data.filter((type) => {
                    return type.name !== claim.type?.name
                })
                if (isSubscribed) {
                    setTypes(typeArray)
                }
            })
        // to prevent unsubscribe error #2
        return () => (isSubscribed = false)
    }, [])

    const handleAllClaims = () => {
        history.push('/');
    };

    const handleChange = ({ target }) => {
        setClaim((prevState) => ({
            ...prevState,
            [target.name]: types.find((el) => el.name === target.value)
        }));
    }

    const createClaim = () => {
        axiosCreateClaim(claim)
            .then((resp) => {
                history.push('/')
            }).catch((error) => {
            console.error(error)
        })
    }

    return (
        <div className='container-incoming-claim'>
            <h2 className='main-title'>Creating new claim</h2>
            <label className='label-claim'>TITLE</label>
            <input className='claim-editing'
                   name='title'
                   placeholder='Type claim title'
                   onChange={ (event) => handleTextFieldChange(event, setClaim) }
            />

            <div className='claim-type'>
                <label className='label-claim'>TYPE</label>
                <select className='type-select'
                        name='type'
                        defaultValue='DEFAULT'
                        onChange={ handleChange }
                >
                    <option value="DEFAULT" disabled>Choose a salutation ...</option>
                    { types.map((type) => {
                        return <option key={ type.name } value={ type.name }>{ type.name }</option>
                    }) }
                </select>
            </div>

            <label className='label-claim'>DESCRIPTION</label>
            <input className='claim-editing'
                   name='description'
                   placeholder='Type claim description'
                   onChange={ (event) => handleTextFieldChange(event, setClaim) }
            />
            <div>

                <button className='btn-ic btn-cancel'
                        onClick={ handleAllClaims }
                >
                    Cancel
                </button>
                <button className='btn-ic btn-done'
                        onClick={ createClaim }
                >
                    Create
                </button>
            </div>
        </div>
    );
};

