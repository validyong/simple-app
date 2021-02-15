import axios from 'axios'

const API_URL = 'http://localhost:8080'

export const USER_ID_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {
    executedBasicAuthenticationService(userId: string, password: string) {
        return axios.get(`${API_URL}/authentication`,
        {headers: { authorization: this.createBasicAuthToken(userId, password)}})
    }

    executeJwtAuthenticationService(userId: string, password: string) {
        console.log(userId);
        return axios.post(`${API_URL}/authenticate`, {
            userId,
            password
        })
    }

    createBasicAuthToken(userId: string, password: string) {
        return 'Basic ' + window.btoa(userId + ":" + password)
    }

    registerSuccessfulLogin(userId: string, password: string) {
        sessionStorage.setItem(USER_ID_SESSION_ATTRIBUTE_NAME, userId)
        this.setupAxiosInterceptors(this.createBasicAuthToken(userId, password))
    }

    registerSuccessfulLoginForJwt(userId: string, token: string) {
        sessionStorage.setItem(USER_ID_SESSION_ATTRIBUTE_NAME, userId)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    createJWTToken(token: string) {
        return 'Bearer ' + token
    }

    logout() {
        sessionStorage.removeItem(USER_ID_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_ID_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getLoggedInUserId() {
        let user = sessionStorage.getItem(USER_ID_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(token: string) {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()
