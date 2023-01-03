import React, { createContext, useContext } from "react";

const AuthContext = createContext({
  // Initial State of Context
});

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ user: "Lucas" }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
