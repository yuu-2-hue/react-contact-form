
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import axios from 'axios';

import { Input } from '../components/Input.tsx'
import { Textarea } from '../components/Textarea.tsx'
import { ContactSchema } from "../validation/ContactSchema.ts";
import type {ContactFormData} from "../validation/ContactSchema.ts";

import styles from '../css/Contact.module.css'

export const Contact = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(ContactSchema),
    });

    const onSubmit = (data: ContactFormData) => {

        axios.post("http://localhost:8000/api/contact/store", {
            firstName: data.firstName,
            lastName: data.lastName,
            tell: data.tell,
            email: data.email,
            content: data.content,
        })
        .then((res) => {
            console.log(res.data);
            navigate("/thanks");
        })
        .catch((err) => console.error(err));
    };

    return (
        <>
            <h1 className={styles.title}>お問合せフォーム</h1>
            <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.nameWrapper}>
                    <Input
                        type='text'
                        title='苗字'
                        width='300px'
                        backgroundColor='#DFDFDF'
                        value=''
                        autoComplete='family-name'
                        readonly={false}
                        {...register("firstName")}
                        error={errors.firstName?.message}
                    />
                    <Input
                        type='text'
                        title='名前'
                        width='300px'
                        backgroundColor='#DFDFDF'
                        value=''
                        autoComplete='given-name'
                        readonly={false}
                        {...register("lastName")}
                        error={errors.lastName?.message}
                    />
                </div>
                <div className={styles.wrapper}>
                    <Input
                        type='text'
                        title='電話番号'
                        width='700px'
                        backgroundColor='#DFDFDF'
                        value=''
                        autoComplete='tel'
                        readonly={false}
                        {...register("tell")}
                        error={errors.tell?.message}
                    />
                </div>
                <div className={styles.wrapper}>
                    <Input
                        type='text'
                        title='メールアドレス'
                        width='700px'
                        backgroundColor='#DFDFDF'
                        value=''
                        autoComplete='email'
                        readonly={false}
                        {...register("email")}
                        error={errors.email?.message}
                    />
                </div>
                <div className={styles.wrapper}>
                    <Textarea
                        title='お問合せ内容'
                        width='700px'
                        height='200px'
                        backgroundColor='#DFDFDF'
                        readonly={false}
                        {...register("content")}
                        error={errors.content?.message}
                    />
                </div>
                <div className={styles.buttonWrapper}>
                    <button className={styles.button} type='submit'>送信</button>
                </div>
            </form>
        </>
    );
}

export default Contact
