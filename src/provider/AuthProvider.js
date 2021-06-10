import React from 'react';
import {authMethods} from '../firebase/authMethods';

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const handleSignup = () => {
    console.log('handleSignUp')
    return authMethods.signup();
  };

  return (
    <firebaseAuth.Provider
      value={{
        handleSignup
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;

