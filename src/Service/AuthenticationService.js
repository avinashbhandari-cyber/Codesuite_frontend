import axios from 'axios'
import api from '../api/api.js'

const URL = api

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const TOKEN_ATTRIBUTE_NAME = 'token'

class AuthenticationService {

    constructor() {
        this.initAxiosInterceptors()
    }

    executeJwtAuthenticationService(email, password) {
        console.log("Authenticating user:", email);
        return axios.post(`${URL}/authenticate`, {
            email,
            password
        });
    }

    userRegistrationService(email, username, password) {
        console.log("Registering user:", email);
        return axios.post(`${URL}/userRegistration`, {
            email,
            username,
            password
        });
    }

    registerSuccessfulLoginForJwt(email, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, email)
        localStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, email)
        sessionStorage.setItem(TOKEN_ATTRIBUTE_NAME, token)
        localStorage.setItem(TOKEN_ATTRIBUTE_NAME, token)
        console.log("token saved:", token)
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('auth-change'));
        }
    }

    createJWTToken(token) {
        if (!token) return ''
        if (token.startsWith('Bearer ')) return token
        return 'Bearer ' + token
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        localStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        sessionStorage.removeItem(TOKEN_ATTRIBUTE_NAME);
        localStorage.removeItem(TOKEN_ATTRIBUTE_NAME);
        if (typeof window !== 'undefined') {
            window.dispatchEvent(new Event('auth-change'));
        }
    }

    isUserLoggedIn() {
        let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME) || sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        return user !== null && user !== ''
    }

    getLoggedInUserName() {
        let user = localStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME) || sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }

    getToken() {
        return localStorage.getItem(TOKEN_ATTRIBUTE_NAME) || sessionStorage.getItem(TOKEN_ATTRIBUTE_NAME) || ''
    }

    initAxiosInterceptors() {
        axios.interceptors.request.use(
            (config) => {
                const token = this.getToken()
                if (this.isUserLoggedIn() && token) {
                    config.headers['Authorization'] = this.createJWTToken(token)
                }
                return config
            },
            (error) => {
                return Promise.reject(error)
            }
        )
    }

    setupAxiosInterceptors(token) {
        // kept for backward compatibility
    }
}

export default new AuthenticationService()
