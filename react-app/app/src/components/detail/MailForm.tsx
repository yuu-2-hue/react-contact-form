
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";

import { MailSchema } from "../../validation/MailSchema.ts";
import type { MailFormData } from "../../validation/MailSchema.ts";

import { Input } from '../../components/Input.tsx';
import { Textarea } from '../../components/Textarea.tsx';
import styles from '../../css/Detail.module.css';

import axios from 'axios';

export const MailForm = () => {

    const { id } = useParams<{ id: string }>();

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
        .then((res) => {
            console.log(res.data.message);
        })
        .catch((err) => console.error(err));
    };

    return (
        <form className={`${styles.content} ${styles.paddingTop}`} onSubmit={handleSubmit(onSend)}>
            <div>
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
            <div className={styles.paddingTop}>
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
    );
}