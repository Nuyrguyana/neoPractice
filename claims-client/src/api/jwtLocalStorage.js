import jwtDecoder from 'jwt-decode'
export const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
}

export const isTokenValid = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return false
    } else {
        const decodedToken = jwtDecoder(token);
        const currentDate = new Date();
        const timeInSeconds = currentDate.getTime()/1000;
        return (timeInSeconds < decodedToken.exp);
    }
}
export const getToken = () => {
  return localStorage.getItem('token');
}
