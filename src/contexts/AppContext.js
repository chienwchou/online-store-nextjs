"use client";

import { createContext, useContext, useReducer } from "react";

// Define initial state
const initialState = {
  user: null,
  theme: "light",
  isLoading: false,
};

// Create context
const AppContext = createContext();

// Reducer function
function appReducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return { ...state, user: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

const createUserData = (userData, delay = 800) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate loading additional user data
      const returnedUserData = {
        name: "Bill",
        email: "chien.w.chou@gmail.com",
      };
      resolve(returnedUserData);
    }, delay);
  });
};

// Context Provider Component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Action creators
  const setUser = async (user) => {
    console.log("login...", user);
    dispatch({ type: "SET_USER", payload: user });

    console.log("User loaded successfully:", user);
  };
  const setTheme = (theme) => dispatch({ type: "SET_THEME", payload: theme });
  const setLoading = (loading) =>
    dispatch({ type: "SET_LOADING", payload: loading });
  const logout = () => dispatch({ type: "LOGOUT" });
  // Enhanced createUser action with fake HTTP request
  const createUser = async (userData) => {
    try {
      // Fake API call to load additional user data
      console.log("Loading user data...", userData);
      const loggedInUser = await createUserData(userData);

      // Update user with complete data
      dispatch({ type: "SET_USER", payload: loggedInUser });

      console.log("User created and loaded successfully:", loggedInUser);
      return loggedInUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  };

  const value = {
    ...state,
    setUser,
    setTheme,
    setLoading,
    logout,
    createUser,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// Custom hook to use the context
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
