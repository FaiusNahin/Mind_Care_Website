import initializeAuthentication from './../Firebase/firebasee.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from 'react';
import { useEffect } from 'react';

initializeAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const loggedOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            }).finally(() => setIsLoading(false));
    }

    //observe
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {

            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    return { user, isLoading, setUser, loggedOut, signInUsingGoogle }
}

export default useFirebase;