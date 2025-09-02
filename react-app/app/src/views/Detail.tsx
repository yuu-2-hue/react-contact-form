
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';

import { Input } from '../components/Input.tsx'
import { Textarea } from '../components/Textarea.tsx'

import { MailSchema } from "../validation/MailSchema.ts";
import type {MailFormData} from "../validation/MailSchema.ts";

import styles from '../css/Detail.module.css'
//import Contact from "./Contact.tsx";

type Contact = {
    id: number;
    firstName: string;
    lastName: string;
    tell: string;
    email: string;
    content: string;
};

export const Detail = () => {

    const [contact, setContact] = useState<Contact | null>(null);

    const { id } = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<MailFormData>({
        resolver: zodResolver(MailSchema),
    });

    const onSend = (data: MailFormData) => {
        axios.post("http://localhost:8000/api/contact/send", {
            id: id,
            title: data.title,
            main: data.main,
        })
        .then(() => {
            console.log("メールを送信しました");
        })
        .catch((err) => console.error(err));
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/contact/${id}`)
        .then((res) => {
            console.log(res.data);
            setContact(res.data);
        })
        .catch((error) =>
            console.error('エラー:', error)
        );
    }, []);

    return (
        <div className={styles.detailContainer}>
            <div className={styles.influenceWrapper}>
                <div className={styles.nameWrapper}>
                    <Input
                        type='text'
                        title='苗字'
                        width='250px'
                        backgroundColor='#fff'
                        value={contact?.firstName}
                        autoComplete='family-name'
                        readonly={true}
                    />
                    <Input
                        type='text'
                        title='名前'
                        width='250px'
                        backgroundColor='#fff'
                        value={contact?.lastName}
                        autoComplete='given-name'
                        readonly={true}
                    />
                </div>
                <div className={styles.wrapper}>
                    <Input
                        type='text'
                        title='電話番号'
                        width='600px'
                        backgroundColor='#fff'
                        value={contact?.tell}
                        autoComplete='tel'
                        readonly={true}
                    />
                </div>
                <div className={styles.wrapper}>
                    <Input
                        type='text'
                        title='メールアドレス'
                        width='600px'
                        backgroundColor='#fff'
                        value={contact?.email}
                        autoComplete='email'
                        readonly={true}
                    />
                </div>
                <div className={styles.wrapper}>
                    <Textarea
                        title='お問合せ内容'
                        width='600px'
                        height='200px'
                        backgroundColor='#fff'
                        value={contact?.content}
                        readonly={true}
                    />
                </div>
            </div>
            <form className={styles.influenceWrapper} onSubmit={handleSubmit(onSend)}>
                <div className={styles.wrapper}>
                    <Input
                        type='text'
                        title='件名'
                        width='600px'
                        backgroundColor='#fff'
                        value=''
                        autoComplete='off'
                        {...register("title")}
                        error={errors.title?.message}
                        readonly={false}
                    />
                </div>
                <div className={styles.wrapper}>
                    <Textarea
                        title='本文'
                        width='600px'
                        height='434px'
                        backgroundColor='#fff'
                        {...register("main")}
                        error={errors.main?.message}
                        readonly={false}
                    />
                </div>
                <div className={styles.buttonWrapper}>
                    <button className={styles.button} type='submit'>送信</button>
                </div>
            </form>
        </div>
    );
}