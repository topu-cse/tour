import React, { createContext, useEffect, useState } from 'react';
import app from '../component/firebase/firebase.config'
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext=createContext();

const auth=getAuth(app);
const Usercontext = ({children}) => {
const [user,setuser]=useState({})
const [loading,setLoading]=useState(true)

const googleProvider=new GoogleAuthProvider();





const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
    
}
const signin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)

}

const logOut=()=>{
   return signOut(auth)
}



const signInGoogle=()=>{
return signInWithPopup(auth,googleProvider)
}


useEffect(()=>{
   const unsubsribe=onAuthStateChanged(auth,currentUser=>{
    setuser(currentUser);
    setLoading(false)
    console.log(currentUser)
   }) 
   return()=>{
    unsubsribe();
   }
},[])

    const authInfo={user,loading, createUser,signin, logOut,signInGoogle}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Usercontext; 