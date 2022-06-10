import React, { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
} from "firebase/auth";

// initialize firebase
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState("")

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // registration
  const register = (email, password, name, phone, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, phone, "POST");
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        setAuthError("");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // sign-In-With-email-and-password
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location.state?.from?.pathname || "/";
        navigate(destination);
        setAuthError("");
        setUser(userCredential.user);
        // const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //sign is With google
  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, user.phoneNumber, "PUT");
        // console.log(user)
        const destination = location.state?.from?.pathname || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // onAuthStateChanged
  useEffect(() => {
    setIsLoading(true);
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken =>{
          setToken(idToken)
        })
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unSubscribe;
  }, []);

  // admin
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then(data => setIsAdmin(data.admin));
  }, [user.email]);

  //signOut
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setIsLoading(false));
  };

  // save user information to the database.
  const saveUser = (email, displayName, phone, method) => {
    const userInfo = { email, displayName, phone };
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json ",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return {
    user,
    isAdmin,
    token,
    register,
    logOut,
    loginUser,
    isLoading,
    authError,
    signInWithGoogle,
  };
};

export default useFirebase;
