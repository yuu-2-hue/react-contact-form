
import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import api from "../services/loginService";

type User = {
    id: number;
    name: string;
    email: string;
};

type AuthContextType = {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, password: string) => {
        await api.get("/sanctum/csrf-cookie");
        await api.post("/api/admin/login", { email, password, });
        const res = await api.get("/api/user");
        setUser(res.data);
    };

    const logout = async () => {
        await api.post("/api/admin/logout");
        setUser(null);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const res = await api.get("/api/user");
            setUser(res.data);
        } catch {
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
