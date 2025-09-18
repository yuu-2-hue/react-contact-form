
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { useAuth } from "../context/AuthContext";

import styles from '../css/Header.module.css'

export const Header = () => {

    const { logout } = useAuth();

    const navigate = useNavigate();

    const onSubmit = async () => {
        try {
            await logout();
            navigate('/admin/login');
            console.log("ログアウト成功！");
        } catch (err) {
            console.error("ログアウト失敗", err);
        }
    };

    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>ContactForm</h1>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/thanks">Thanks</Link> | 
                <Link to="/admin/login">Login</Link> | 
                <Link to="/admin">Admin</Link> | 
                <Link to="/admin/detail">Detail</Link>
            </nav>
            <button onClick={onSubmit}>ログアウト</button>
        </header>
    );
}

export default Header