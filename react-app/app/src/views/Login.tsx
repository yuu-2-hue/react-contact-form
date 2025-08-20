
import { Input } from '../components/Input.tsx'

import styles from '../css/Login.module.css'

export const Login = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <Input type='text' title='メールアドレス' name='email' width='700px' height='43px' autoComplete='email' />
                </div>
                <div className={styles.wrapper}>
                    <Input type='text' title='パスワード' name='password' width='700px' height='43px' autoComplete='off' />
                </div>
                <div className={styles.buttonWrapper}>
                    <button className={styles.button}>Login</button>
                </div>
            </div>
        </>
    );
}
