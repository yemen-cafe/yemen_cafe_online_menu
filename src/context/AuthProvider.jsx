import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import { userObserver } from '../helpers/firebase';

const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(true);

    useEffect(() => {
        userObserver(setCurrentUser);
    }, []);

    return (
        <authContext.Provider
            value={{
                currentUser,
            }}>
            {children}
        </authContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(authContext);
};

export default AuthProvider;
