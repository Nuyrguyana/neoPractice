import React from 'react';
import iconMail from '../image/icon-mail.svg'
import iconLock from '../image/icon-lock.svg'

export const LoginForm = () => {
    return (
        <div className='container-login-form'>
            <label className='label-login'>
                E-MAIL
            </label>
            {/*<div>*/}
            <img className='icon-font-awesome' src={iconMail}/>
            <input className='input-login'
                   placeholder='Type your e-mail'/>
            {/*</div>*/}
            <label className='label-login'>PASSWORD</label>
            <img className='icon-font-awesome' src={iconLock}/>
            <input className='input-login'
                   placeholder='Type your password'/>
            <div className='container-checkbox'>
                <input className='input-checkbox' type='checkbox'/>
                <label className='label-checkbox'>Keep me logged in</label>
            </div>
            <div>
                <button className='btn-login'>Login
                </button>
            </div>
        </div>
    );
};

