import React from "react";
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import './index.css'
import './css/sanitize.css'

import { ProtectedRoute } from "./components/ProtectedRoute";
import Login from "./views/Login";
import { Header } from './layouts/Header.tsx'
import { Contact } from './views/Contact.tsx'
import { Thanks } from './views/Thanks.tsx'
import { Admin } from './views/Admin.tsx'
import { Detail } from './views/Detail.tsx'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* 一般ユーザー */}
          <Route path="/" element={<Contact />} />
          <Route path="/thanks" element={<Thanks />} />

          {/* 管理者 */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="/admin/detail" element={<ProtectedRoute><Detail /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
  ,
)
