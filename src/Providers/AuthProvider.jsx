import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const signupWithEmail = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signupWithEmailGoogle = () => {
        setLoader(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logout = () => {
        setLoader(true);
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user is:', currentUser);
            setUser(currentUser);
            setLoader(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loader,
        signupWithEmail,
        signupWithEmailGoogle,
        logout,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;