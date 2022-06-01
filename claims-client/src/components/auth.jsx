import React from 'react';
import imgLogin from '../image/imgLogin.svg'
import iconMin from '../image/iconMin.png'
import iconMax from '../image/iconMax.svg'
import {AuthForm} from "./authForm";

export const Auth = () => {
    return (
        <div className='container-login'>
            <img className='img-login' src={imgLogin}/>
            <img className='img-icon-max' src={iconMax}/>
            <AuthForm/>
            <div className='footer-login'>
                <img className='img-footer' src={iconMin}/>
            </div>
        </div>
    );
};

