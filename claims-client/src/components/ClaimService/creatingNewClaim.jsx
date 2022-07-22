import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { getToken } from '../../api/jwtLocalStorage';
import { handleTextFieldChange } from '../../utils/handlers';

export const CreatingNewClaim = () => {
    const history = useHistory()
    const [claim, setClaim] = useState({})
    const [types, setTypes] = useState([])

    useEffect(() => {
        let isSubscribed = true;

        axios.get('http://localhost:3001/types', {
            headers: {
                Authorization: "Bearer " + getToken()
            }
        }).then((resp) => {

            const typeArray = resp.data.filter((type) => {
                return type.name !== claim.type?.name
            })
            if (isSubscribed) {
                setTypes(typeArray)
            }
        })

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
        axios.post('http://localhost:3001/claim', {
            "title": claim.title,
            "description": claim.description,
            "type": claim.type.slug
        }, {
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
                        onChange={ handleChange }
                >
                    { types.map((type) => {
                        return <option key={ type.name }>{ type.name }</option>
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

