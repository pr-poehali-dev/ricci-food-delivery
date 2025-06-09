import { useState, createContext, useContext, ReactNode } from "react";
import { User } from "@/types";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (
    name: string,
    email: string,
    password: string,
    phone: string,
  ) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Имитация авторизации
    const mockUser: User = {
      id: "1",
      name: "Marco Rossi",
      email,
      phone: "+7 999 123-45-67",
      loyaltyPoints: 150,
      isAuthenticated: true,
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    phone: string,
  ) => {
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      loyaltyPoints: 0,
      isAuthenticated: true,
    };
    setUser(newUser);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
