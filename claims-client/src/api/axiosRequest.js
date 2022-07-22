import { getToken } from './jwtLocalStorage';
import axios from 'axios';

export const SERVER_PATH = process.env.REACT_APP_SERVER_PATH

export const requestConfig = {
    headers: {
        Authorization: "Bearer " + getToken()
    }
}

export const axiosGetStatus = () => {
    return axios.get(`${ SERVER_PATH }/status`, requestConfig)
}

export const axiosGetClaimById = (claimId) => {
    return axios.get(`${ SERVER_PATH }/claim/${ claimId }`, requestConfig)
}

export const axiosUpdateClaimById = (claimId, updatedClaim) => {
    return axios.put(`${ SERVER_PATH }/claim/${ claimId }`, updatedClaim, requestConfig)
}

export const axiosGetTypes = () => {
    return axios.get(`${ SERVER_PATH }/types`, requestConfig)
}

export const axiosGetClaims = () => {
    return axios.get(`${ SERVER_PATH }/claim`, requestConfig)
}

export const axiosCreateClaim = (claim) => {
    return axios.post(`${ SERVER_PATH }/claim`, {
        "title": claim.title,
        "description": claim.description,
        "type": claim.type.slug
    }, requestConfig)
}

export const axiosAuth = (email, password) => {
    return axios.post(`${ SERVER_PATH }/auth/login`, {
        "email": email,
        "password": password
    })
}

export const axiosUser = (regUser) => {
    return axios.post(`${ SERVER_PATH }/user`, {
        "fullName": regUser.fullName,
        "email": regUser.email,
        "password": regUser.password,
        "role": regUser.role.slug
    }, requestConfig)
}