import React, { createContext, useEffect, useState } from 'react'
import { signInAuth, signOutAuth, validateLogin } from '../service/Auth/Auth';

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {

    const [userState, setUserState] = useState(null);
    const [authPending, setAuthPending] = useState(true);

    const signIn = (email, password) => {
        console.log(`email: ${email}, password: ${password}`)
        return signInAuth(email, password)
    }
    const signOut = () => signOutAuth();

    useEffect(() => {
        validateLogin()
            .then(userAuth => {
                setUserState(true);
                setAuthPending(false);
            })
    }, [])

    if (authPending) {
        return (
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh"
            }}
            >
                <div>Authentication in progress</div>
            </div>
        )
    }

    return (
        <AuthContext.Provider value={{
            signIn: signIn,
            signOut: signOut,
            userState: userState
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}
