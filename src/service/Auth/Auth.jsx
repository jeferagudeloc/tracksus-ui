import React from 'react'

export const signInAuth = async (email, password) => {
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    return true;
}

export const signOutAuth = async () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    return true;
}

export const validateLogin = async () => {
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')
    const validate = (email == undefined) ? null : { email: email, password: password }
    return validate
}

