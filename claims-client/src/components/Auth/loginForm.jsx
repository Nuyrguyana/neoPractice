import React from 'react';
import iconMail from '../../image/icon-mail.svg';
import iconLock from '../../image/icon-lock.svg';
import { classNames } from '../../utils/joinClassNames';
import './index.css'

export const LoginForm = (
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
        handleLogin
    }) => {

    return (
        <form>
            <label className='label-login'>
                E-MAIL
            </label>
            { (emailDirty && emailError) && <div style={ { color: 'red' } }>{ emailError }</div> }
            <input className='input-login'
                   onChange={ emailHandler }
                   value={ email }
                   onBlur={ blurHandler }
                   name='email'
                   type='email'
                   placeholder='Type your e-mail'/>
            <img className='icon-font-awesome' src={ iconMail }/>

            <label className='label-login'>
                PASSWORD
            </label>
            { (passwordDirty && passwordError) && <div style={ { color: 'red' } }>{ passwordError }</div> }
            <input className='input-login'
                   onChange={ passwordHandler }
                   value={ password }
                   onBlur={ blurHandler }
                   name='password'
                   type='password'
                   placeholder='Type your password'/>
            <img className='icon-font-awesome' src={ iconLock }/>

            <div className='container-checkbox'>
                <input className='input-checkbox' type='checkbox'/>
                <label className='label-checkbox'>Keep me logged in</label>
            </div>

            <div>
                <button className={ classNames('btn-login', formValid ? 'btn-active' : null) }
                        type='submit'
                        disabled={ !formValid }
                        onClick={ handleLogin }
                >
                    Login
                </button>
            </div>
        </form>
    );
};

