import { useState, useEffect } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../../firebase.config.js";

const googleAuthProvider = new GoogleAuthProvider();

const useAuthStore = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const observeAuthState = () => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
  };

  const loginGoogleWithPopUp = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error('Error during login', error);
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error during logout', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = observeAuthState();
    return () => unsubscribe();
  }, []);

  return {
    user,
    observeAuthState,
    loginGoogleWithPopUp,
    logout,
    loading,
  };
};

export default useAuthStore;