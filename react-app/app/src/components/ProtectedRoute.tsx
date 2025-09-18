import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { JSX } from "react";

type Props = {
    children: JSX.Element;
};

export const ProtectedRoute = ({ children }: Props) => {
    const { user } = useAuth();

    if (!user) return <Navigate to="/admin/login" replace />;

    return children;
};