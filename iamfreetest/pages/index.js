import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { initFirebase } from "../firebase/firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router'
import GoogleButton from "../components/googleButton"
import { getDatabase, ref, child, get } from "firebase/database";
import React, { useState, useEffect } from 'react';


export default function Home() {
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter()

  const getUserRole = () => {
    if (user) {
      let userId = user.uid
      get(child(dbRef, `users/${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
          
          return snapshot.val();
          
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });
    }
  }

  useEffect(() => {
    getUserRole();
  });


  const db = getDatabase();
  const dbRef = ref(getDatabase());


 


  if (user) {
    console.log(`dfsdf ${getUserRole()}`)
    if (getUserRole() == 1) {
      router.push("/teacher")
    }
    if (getUserRole() == "student") {
      router.push("/student")
    }
    else {
      router.push("/make_profile")
    }
  }
  if (loading) {
    return (
      <div>Loading .... </div>
    )
  }
  const signIn = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result);
  }



  // ui --------------------------------------------

  return (
    <div className="h-screen flex" >
      <div class="m-auto">
        <GoogleButton onclick={signIn} />
      </div>
    </div>
  )


}
