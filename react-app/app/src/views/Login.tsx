
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";

import styles from '../css/Login.module.css';
import { Input } from '../components/Input';
import { useAuth } from "../context/AuthContext";
import { LoginSchema, type LoginFormData } from "../validation/LoginSchema.ts";

export default function Login() {

    const { login } = useAuth();

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        try {
            await login(data.email, data.password);
            navigate('/admin');
            console.log("ログイン成功！");
        } catch (err) {
            console.error("ログイン失敗", err);
        }
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.wrapper}>
                <Input
                    type="email"
                    title="メールアドレス"
                    width="100%"
                    backgroundColor="#DFDFDF"
                    autoComplete="email"
                    error={errors.email?.message}
                    {...register("email")}
                />
            </div>
            <div className={styles.wrapper}>
                <Input
                    type="password"
                    title="パスワード"
                    width="100%"
                    backgroundColor="#DFDFDF"
                    autoComplete="current-password"
                    error={errors.password?.message}
                    {...register("password")}
                />
            </div>
            <div className={styles.buttonWrapper}>
                <button className={styles.button} type="submit">ログイン</button>
            </div>
        </form>
    );
}

