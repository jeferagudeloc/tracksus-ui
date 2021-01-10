import React, { createContext, useEffect, useState } from 'react'
import { signInAuth, signOutAuth, validateLogin } from '../service/Auth/Auth';
import Cookies from 'universal-cookie';


export const AuthContext = createContext(null);

export const AuthProvider = (props) => {

    const [userState, setUserState] = useState(null);
    const [authPending, setAuthPending] = useState(true);

    const signIn = (e, email, password) => {
        return signInAuth(e, email, password)
    }
    const signOut = () => signOutAuth();

    useEffect(() => {
        validateLogin()
            .then(userAuth => {
                let existSessionCookie = false; 
                const cookies = new Cookies();
                if (cookies.get('user_session') != undefined) {
                    existSessionCookie = true;
                }
                setUserState(existSessionCookie);
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
