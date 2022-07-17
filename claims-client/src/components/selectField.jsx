import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../api/jwtLocalStorage';


export const SelectField = ({claim, setClaim}) => {
    const [types, setTypes] = useState([])

    useEffect(() => {
        // to prevent unsubscribe error #1
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

        // to prevent unsubscribe error #2
        return () => (isSubscribed = false)
    }, [claim])

    const handleChange = ({target}) => {
        setClaim((prevState) => ({
            ...prevState,
            [target.name]: types.filter((el) => {
                return el.name === target.value
            })[0]
        }));
    }

    // console.log("selField claim", claim)
    return (
        <select
            className='type-select'
            onChange={handleChange}
            name='type'>
            <option key={claim.type?.name}>
                {claim.type?.name}
            </option>
            {types.map((type) => {
                return <option key={type.name}>
                    {type.name}
                </option>
            })}
        </select>
    );
};

