import { initializeApp } from 'firebase/app';
import { deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

import { updateDoc } from '@firebase/firestore';

import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth';
import { toastFailNotify, toastSuccessNotify } from './toastNotify';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

//AUTHENTICATION START

export const login = async (email, password, navigate) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        toastSuccessNotify('Herzlich Wilkommen!');
        navigate('/');
    } catch (error) {
        console.log(error);
        toastFailNotify('Etwas schiefgelaufen :( Versuche nochmal!');
    }
};
export const logout = async () => {
    try {
        await signOut(auth);
        toastSuccessNotify('Erfolgreich ausgeloggt..');
    } catch (error) {
        console.log(error);
    }
};

export const userObserver = (setCurrentUser) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const { email } = user;
            setCurrentUser({ email });
        } else {
            setCurrentUser(false);
            console.log('user signed out');
        }
    });
};
//AUTHENTICATION END

//FIRESTORE START
const db = getFirestore();

//get collection from firestore
export const getMenu = async (colType) => {
    const colRef = collection(db, colType.toLowerCase());
    const menu = [];
    try {
        const snapshot = await getDocs(colRef);
        snapshot?.docs.forEach((doc) => {
            menu.push({ ...doc.data(), id: doc.id });
        });
    } catch (error) {
        console.log(error);
    }

    return menu;
};

export const updateItem = async (id, value, colType) => {
    const docRef = doc(db, colType?.toLowerCase(), id);
    const data = {
        ...value,
        allergene: value?.allergene,
        inhalt: value?.inhalt,
        extra: value?.extra ? value?.extra : [],
        menu: value?.menu,
    };

    try {
        await updateDoc(docRef, data);
        toastSuccessNotify('Speise erfolgreich aktuailisiert..');
    } catch (error) {
        console.log(error);
        toastFailNotify('Etwas schiefgelaufen :( Versuche nochmal!');
    }
};

export const addItem = async (e, value, colType, setData, data) => {
    const colRef = collection(db, colType?.toLowerCase());
    const newData = {
        ...value,
        allergene: value?.allergene || '',
        inhalt: value?.inhalt || '',
        extra: value?.extra ? value?.extra : [],
    };

    try {
        addDoc(colRef, newData);
        setData([...data, newData]);
        toastSuccessNotify('Speise erfolgreich hinzugefügt..');
    } catch (error) {
        console.log(error);
        toastFailNotify('Etwas schiefgelaufen :( Versuche nochmal!');
    }
};

export const deleteItem = async (id, colType) => {
    const docRef = doc(db, colType.toLowerCase(), id);

    try {
        deleteDoc(docRef);
        toastSuccessNotify('Speise erfolgreich gelöscht..');
    } catch (error) {
        console.log(error);
        toastFailNotify('Etwas schiefgelaufen :( Versuche nochmal!');
    }
};
