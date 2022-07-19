import React, { useEffect, useState } from 'react';
import imgLogin from "../image/imgLogin.svg";
import iconMax from "../image/iconMax.svg";
import iconMin from "../image/iconMin.png";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getToken, updateToken } from '../api/jwtLocalStorage';
import { LoginForm } from './loginForm';
import { RegistrationForm } from './registrationForm';


export const Auth = () => {
    const {setAuth} = useSelector(state => state)
    const [isLogin, setIsLogin] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [fullName, setFullName] = useState('')

    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [fullNameDirty, setFullNameDirty] = useState(false)

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [fullNameError, setFullNameError] = useState('')

    const [regUser, setRegUser] = useState({})

    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError || fullNameError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }

    }, [emailError, passwordError, fullNameError])

    const emailHandler = ({target}) => {
        const value = target.value;
        setEmail(value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(value).toLowerCase())) {
            setEmailError('Email введен не корректно')
            if (!value) {
                setEmailError('Электронная почта обязательна для заполнения')
            }
        } else {
            setEmailError('')
        }
    }

    const fullNameHandler = ({target}) => {
        const value = target.value;
        setFullName(value)
        const re = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
        if (!re.test(String(value).toLowerCase())) {
            setFullNameError('Full Name введен не корректно')
            if (!value) {
                setFullNameError('ФИО обязательны для заполнения')
            }
        } else {
            setFullNameError('')
        }
    }

    const passwordHandler = ({target}) => {
        const value = target.value;
        setPassword(target.value)
        if (target.value.length < 8) {
            setPasswordError('Пароль должен состоять минимум из 8 символов')
            if (!value) {
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
            case 'fullname':
                setFullNameDirty(true)
                break
        }
    }

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/auth/login', {
                "email": email,
                "password": password
            })
            .then((resp) => {
                updateToken(resp.data.token)
                setAuth(true)
            })
            .catch(error => console.error(error))
    }

    const handleRegistration = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/user', {
                "fullName": regUser.fullName,
                "email": regUser.email,
                "password": regUser.password,
                "role": regUser.role.slug
            }, {
                headers: {
                    Authorization: "Bearer " + getToken()
                }
            })
            .then((resp) => {
                console.log(resp.data)
                setIsLogin(false)
            })
            .catch(error => console.error(error))
    }

    const toggleFormType = () => {
        setIsLogin((prevState) => !prevState)
    }

    return (
        <div className='wrapper-auth'>
            <div className='container-left-auth'>
                <img className='img-login' src={imgLogin}/>
            </div>

            <div className='container-right-auth'>
                <div className='container-input-login'>
                    <img className='img-icon-max' src={iconMax}/>
                    {!isLogin
                        ? (
                            <>
                                <LoginForm emailDirty={emailDirty}
                                           emailError={emailError}
                                           emailHandler={emailHandler}
                                           email={email}
                                           blurHandler={blurHandler}
                                           passwordDirty={passwordDirty}
                                           passwordError={passwordError}
                                           passwordHandler={passwordHandler}
                                           password={password}
                                           formValid={formValid}
                                           handleLogin={handleLogin}
                                />
                                <p className='req-reg'> Not a member?
                                    <a className='info text-decoration-none' role='button'
                                       onClick={toggleFormType}> Request registration. </a>
                                </p>
                            </>
                        ) : (
                            <>
                                <RegistrationForm emailDirty={emailDirty}
                                                  emailError={emailError}
                                                  emailHandler={emailHandler}
                                                  email={email}
                                                  blurHandler={blurHandler}
                                                  passwordDirty={passwordDirty}
                                                  passwordError={passwordError}
                                                  passwordHandler={passwordHandler}
                                                  password={password}
                                                  formValid={formValid}
                                                  handleLogin={handleLogin}
                                                  fullNameHandler={fullNameHandler}
                                                  fullName={fullName}
                                                  fullNameDirty={fullNameDirty}
                                                  fullNameError={fullNameError}
                                                  handleRegistration={handleRegistration}
                                                  regUser={regUser}
                                                  setRegUser={setRegUser}
                                />
                                <p className='req-reg'> Already have account?
                                    <a className='info text-decoration-none' role='button'
                                       onClick={toggleFormType}> Request authorization. </a>
                                </p>
                            </>)
                    }
                </div>
            </div>
            <div className='footer-login'>
                <img className='img-footer' src={iconMin}/>
            </div>
        </div>
    );
};

