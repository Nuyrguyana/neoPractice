import { getToken } from './jwtLocalStorage';

export const SERVER_PATH = process.env.REACT_APP_SERVER_PATH

export const requestConfig = {
    headers: {
        Authorization: "Bearer " + getToken()
    }
}