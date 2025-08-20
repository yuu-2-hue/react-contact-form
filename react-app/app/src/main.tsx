import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import './css/sanitize.css'

import { Header } from './layouts/Header.tsx'
import { Contact } from './views/Contact.tsx'
import { Thanks } from './views/Thanks.tsx'
import { Login } from './views/Login.tsx'
import { Admin } from './views/Admin.tsx'
import { Detail } from './views/Detail.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Contact />} />
      <Route path="/thanks" element={<Thanks />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/detail" element={<Detail />} />
    </Routes>
  </BrowserRouter>
  ,
)
