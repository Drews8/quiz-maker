import axios from "axios";
import {AUTH_LOGOUT, AUTH_SUCCESS} from "./actionTypes";

export function auth(email, password, isLogin) {
  return async dispatch => {
    const authData = {
      email,
      password,
      returnSecureToken: true,
    }

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAF7maRGKWO-xf6a4DUmBH3715O_i_7EDc'

    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAF7maRGKWO-xf6a4DUmBH3715O_i_7EDc'
    }


    const response = await axios.post(url, authData)
    const data = response.data
    console.log(data)

    const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)


    localStorage.setItem('token', data.idToken)
    localStorage.setItem('userId', data.localId)
    localStorage.setItem('expirationDate', expirationDate)

    dispatch(authSuccess(data.idToken))
    dispatch(autoLogout(data.idToken))


  }
}

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token,
  }
}

export function autoLogout(time) {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout())
    }, time * 1000)
  }
}

export function logout() {
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  localStorage.removeItem('expirationDate')
  return {
    type: AUTH_LOGOUT,
    token: null,
  }
}