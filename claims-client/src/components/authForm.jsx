import React from 'react';
import iconMail from '../image/icon-mail.svg'
import iconLock from '../image/icon-lock.svg'
import imgLogin from "../image/imgLogin.svg";
import iconMax from "../image/iconMax.svg";
import iconMin from "../image/iconMin.png";

export const AuthForm = () => {
    return (
        <div className='wrapper-auth'>
            <div className='container-left-auth'>
                <img className='img-login' src={imgLogin}/>
            </div>

            <div className='container-right-auth'>
                <div className='container-input-login'>
                <img className='img-icon-max' src={iconMax}/>
                    <label className='label-login'>
                        E-MAIL
                    </label>
                    <input className='input-login'
                           type='email'
                           placeholder='Type your e-mail'/>
                    <img className='icon-font-awesome' src={iconMail}/>
                    <label className='label-login'>PASSWORD</label>
                    <input className='input-login'
                           type='password'
                           placeholder='Type your password'/>
                    <img className='icon-font-awesome' src={iconLock}/>
                    <div className='container-checkbox'>
                        <input className='input-checkbox' type='checkbox'/>
                        <label className='label-checkbox'>Keep me logged in</label>
                    </div>
                    <div>
                        <button className='btn-login'>Login</button>
                    </div>
                    <p className='req-reg'> Not a member?
                        <a className='info text-decoration-none' role='button'> Request registration. </a>
                    </p>
                </div>
            </div>
            <div className='footer-login'>
                <img className='img-footer' src={iconMin}/>
            </div>
        </div>
    );
};

