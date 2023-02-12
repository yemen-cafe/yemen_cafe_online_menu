/*// Initialize Firebase
const app = initializeApp(firebaseConfig);
 */

//==========================================================

import { initializeApp } from 'firebase/app';
import {
    deleteDoc,
    doc,
    getDocs,
    getFirestore,
    query,
    where,
} from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

import { getDoc, updateDoc } from '@firebase/firestore';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
}; */

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase

export const auth = getAuth(app);

//AUTHENTICATION START

export const login = async (email, password) => {
    console.log('logged in');
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
    }
};
export const logout = async () => {
    try {
        await signOut(auth);
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
    };

    try {
        await updateDoc(docRef, data);
        console.log('SENT');
    } catch (error) {
        console.log(error);
    }
};

export const addItem = async (e, value, colType) => {
    const colRef = collection(db, colType?.toLowerCase());
    const data = {
        ...value,
        allergene: value?.allergene,
        inhalt: value?.inhalt,
        extra: value?.extra ? value?.extra : [],
    };

    try {
        addDoc(colRef, data);

        console.log('posted');
    } catch (error) {
        console.log(error);
    }
};

export const deleteItem = async (id, colType) => {
    const docRef = doc(db, colType.toLowerCase(), id);

    try {
        deleteDoc(docRef);
    } catch (error) {
        console.log(error);
    }
};

// Add doc into collection
/* 

//delete doc from collection

export const deleteItem = async (id, navigate) => {
    const docRef = doc(db, 'Articles', id);
    const confirm = await swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this article!',
        icon: 'warning',
        buttons: true,
        dangerMode: true,
    });

    if (confirm) {
        try {
            deleteDoc(docRef);
            toastSuccessNotify('Artical Deleted Successfully');
            navigate('/');
        } catch (error) {
            toastFailNotify(`Something Went Wrong !!!`);
            toastFailNotify(error.message);
        }
    }
};

export const getItem = async (id, setArticle) => {
    const docRef = doc(db, 'Articles', id);

    try {
        const docSnap = await getDoc(docRef);

        setArticle(docSnap.data());
    } catch (error) {
        console.log(error.message);
    }
};



export const userArticles = async (email, setArticles) => {
    const articleArray = [];
    const q = query(
        collection(db, 'Articles'),
        where('author', '==', `${email}`)
    );
    try {
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
            articleArray.push({ ...doc.data(), id: doc.id });
        });
        setArticles(articleArray);
    } catch (error) {
        console.log(error.message);
    }
}; */

//FIRESTORE END

//fireStore Users

const colRefUsers = collection(db, 'users');
