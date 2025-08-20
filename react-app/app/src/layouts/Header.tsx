import { Link } from 'react-router-dom'

import styles from '../css/Header.module.css'

export const Header = () => {
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
        </header>
    );
}

export default Header