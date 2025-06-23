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

// Context Provider Component
export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Action creators
  const setUser = (user) => dispatch({ type: "SET_USER", payload: user });
  const setTheme = (theme) => dispatch({ type: "SET_THEME", payload: theme });
  const setLoading = (loading) =>
    dispatch({ type: "SET_LOADING", payload: loading });
  const logout = () => dispatch({ type: "LOGOUT" });

  const value = {
    ...state,
    setUser,
    setTheme,
    setLoading,
    logout,
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
