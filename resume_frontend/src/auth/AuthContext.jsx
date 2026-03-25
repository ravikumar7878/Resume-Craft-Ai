import React, { createContext, useContext, useEffect, useState } from "react";
import authService from "./authService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = authService.getCurrentUser();
    if (u) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUser(u);
    }
  }, []);

  const login = async (data) => {
    const res = await authService.login(data);
    setUser(res);
    return res;
  };

  const signup = async (data) => {
    const res = await authService.signup(data);

    // 🔹 password preserve (demo UI only)
    setUser({ ...res, password: data.password });

    return res;
  };

  const logout = async (navigate) => {
    await authService.logout();
    setUser(null);

    if (navigate) {
      navigate("/home");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};
