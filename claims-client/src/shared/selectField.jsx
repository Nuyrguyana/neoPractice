import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../api/jwtLocalStorage';
import { axiosGetTypes, requestConfig, SERVER_PATH } from '../api/axiosRequest';


export const SelectField = ({ claim, setClaim }) => {
    const [types, setTypes] = useState([])

    useEffect(() => {
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
        return () => (isSubscribed = false)
    }, [claim])

    const handleChange = ({ target }) => {
        setClaim((prevState) => ({
            ...prevState,
            [target.name]: types.find((el) => el.name === target.value)
        }));
    }

    return (
        <select
            className='type-select'
            onChange={ handleChange }
            name='type'>
            <option key={ claim.type?.name }>
                { claim.type?.name }
            </option>
            { types.map((type) => {
                return <option key={ type.name }>
                    { type.name }
                </option>
            }) }
        </select>
    );
};

