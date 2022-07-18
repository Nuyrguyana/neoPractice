import React, { useEffect, useState } from 'react';
import iconMail from '../image/icon-mail.svg'
import iconLock from '../image/icon-lock.svg'
import imgLogin from "../image/imgLogin.svg";
import iconMax from "../image/iconMax.svg";
import iconMin from "../image/iconMin.png";
import { classNames } from '../shared/utils';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { updateToken } from '../api/jwtLocalStorage';


export const Auth = () => {
    const {setAuth} = useSelector(state => state)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Электронная почта обязательна для заполнения')
    const [passwordError, setPasswordError] = useState('Пароль обязателен для заполнения')
    const [formValid, SetFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            SetFormValid(false)
        } else {
            SetFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email введен не корректно')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPasswordError('Пароль должен состоять минимум из 8 символов')
            if (!e.target.value) {
                setPasswordError('Пароль обязателен для заполнения')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const handleLogin = () => {
        axios.post('http://localhost:3001/auth/login', {
                "email": email,
                "password": password
            })
            .then((resp) => {
                updateToken(resp.data.token)
                setAuth(true)
            })
            .catch((error) => {
                console.error(error)
            })
    }


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
                    {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                    <input className='input-login'
                           onChange={e => emailHandler(e)}
                           value={email}
                           onBlur={e => blurHandler(e)}
                           name='email'
                           type='email'
                           placeholder='Type your e-mail'/>
                    <img className='icon-font-awesome' src={iconMail}/>
                    <label className='label-login'>
                        PASSWORD
                    </label>
                    {(passwordDirty && passwordError) && <div style={{color: 'red'}}>{passwordError}</div>}
                    <input className='input-login'
                           onChange={e => passwordHandler(e)}
                           value={password}
                           onBlur={e => blurHandler(e)}
                           name='password'
                           type='password'
                           placeholder='Type your password'/>
                    <img className='icon-font-awesome' src={iconLock}/>
                    <div className='container-checkbox'>
                        <input className='input-checkbox' type='checkbox'/>
                        <label className='label-checkbox'>Keep me logged in</label>
                    </div>
                    <div>
                        <button className={classNames(
                            'btn-login',
                            formValid ? 'btn-active' : null)}
                                type='submit'
                                disabled={!formValid}
                                onClick={handleLogin}
                        >
                            Login
                        </button>
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

