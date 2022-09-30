import React, { useReducer, useEffect } from 'react';

import { createContext } from 'react';
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from '../utils/firebase/firebase.utils';

export const UserContext = createContext({
  currentUser: null,
});

const ACTION_TYPES = {
  SET_USER_ACTION: 'SET_USER_ACTION',
};

export const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.SET_USER_ACTION:
      return { ...state, currentUser: payload };
    default:
      throw new Error('Uncought error');
  }
};

export function UserProvider({ children }) {
  const [{ currentUser }, dispatch] = useReducer(userReducer, {
    currentUser: null,
  });

  const setCurrentUser = (user) => {
    dispatch({ type: ACTION_TYPES.SET_USER_ACTION, payload: user });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
}
