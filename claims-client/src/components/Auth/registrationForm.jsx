import React, { useEffect, useState } from 'react';
import iconMail from '../../image/icon-mail.svg';
import iconLock from '../../image/icon-lock.svg';
import { classNames } from '../../utils/joinClassNames';
import axios from 'axios';
import { getToken } from '../../api/jwtLocalStorage';
import { handleTextFieldChange } from '../../utils/handlers';

export const RegistrationForm = (
    {
        emailDirty,
        emailError,
        emailHandler,
        email,
        blurHandler,
        passwordDirty,
        passwordError,
        passwordHandler,
        password,
        formValid,
        fullNameDirty,
        fullNameError,
        fullName,
        fullNameHandler,
        handleRegistration,
        setRegUser
    }) => {

    const [roles, setRoles] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/roles', {
            headers: {
                Authorization: "Bearer " + getToken()
            }
        }).then((resp) => {
            setRoles(resp.data)
        })
    }, [])

    const handleRoleChange = ({ target }) => {
        setRegUser((prevState) => ({
            ...prevState,
            [target.name]: roles.find((el) => el.name === target.value)
        }))
    }

    return (
        <form>
            <label className='label-login'>
                Full Name
            </label>
            { (fullNameDirty && fullNameError) && <div style={ { color: 'red' } }>{ fullNameError }</div> }
            <input className='input-login'
                   value={ fullName }
                   name="fullName"
                   type='text'
                   placeholder='Type your full name'
                   onChange={ (e) => {
                       fullNameHandler(e)
                       handleTextFieldChange(e, setRegUser)
                   } }
            />

            <label className='label-login'>
                E-MAIL
            </label>
            { (emailDirty && emailError) && <div style={ { color: 'red' } }>{ emailError }</div> }
            <input className='input-login'
                   value={ email }
                   onBlur={ blurHandler }
                   name='email'
                   type='email'
                   placeholder='Type your e-mail'
                   onChange={ (e) => {
                       emailHandler(e)
                       handleTextFieldChange(e, setRegUser)
                   } }
            />
            <img className='icon-font-awesome-auth' src={ iconMail }/>
            <label className='label-login'>
                PASSWORD
            </label>
            { (passwordDirty && passwordError) && <div style={ { color: 'red' } }>{ passwordError }</div> }
            <input className='input-login'
                   value={ password }
                   onBlur={ blurHandler }
                   name='password'
                   type='password'
                   placeholder='Type your password'
                   onChange={ (e) => {
                       passwordHandler(e)
                       handleTextFieldChange(e, setRegUser)
                   } }
            />
            <img className='icon-font-awesome-auth' src={ iconLock }/>

            <div className='claim-type'>
                <label className='label-claim'>ROLE</label>
                <select className='type-select-role'
                        name='role'
                        onChange={ handleRoleChange }>
                    { roles.map((role) => {
                        return <option key={ role.name }>{ role.name }</option>
                    }) }
                </select>
            </div>

            <div className='container-checkbox'>
                <input className='input-checkbox' type='checkbox'/>
                <label className='label-checkbox'>Keep me logged in</label>
            </div>

            <div>
                <button className={ classNames('btn-login', formValid ? 'btn-active' : null) }
                        type='submit'
                        disabled={ !formValid }
                        onClick={ handleRegistration }
                >
                    Register
                </button>
            </div>

        </form>
    );
};

