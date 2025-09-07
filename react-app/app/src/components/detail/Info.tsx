
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from 'axios';

import { Input } from '../../components/Input.tsx';
import { Textarea } from '../../components/Textarea.tsx';
import styles from '../../css/Detail.module.css';

type Contact = {
    id: number;
    firstName: string;
    lastName: string;
    tell: string;
    email: string;
    content: string;
};

export const Info = () => {

    const [contact, setContact] = useState<Contact | null>(null);

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/contact/${id}`)
        .then((res) => {
            setContact(res.data);
        })
        .catch((error) =>
            console.error('エラー:', error)
        );
    }, []);

    return (
        <>
            {!contact ? (
                <div>データなし</div>
            ) : (
            <div className={styles.content}>
                <div className={`${styles.nameWrapper} ${styles.paddingTop}`}>
                    <Input
                        type='text'
                        title='苗字'
                        width='250px'
                        backgroundColor='#fff'
                        value={contact.firstName}
                        autoComplete='family-name'
                        readonly={true}
                    />
                    <Input
                        type='text'
                        title='名前'
                        width='250px'
                        backgroundColor='#fff'
                        value={contact.lastName}
                        autoComplete='given-name'
                        readonly={true}
                    />
                </div>
                <div className={styles.paddingTop}>
                    <Input
                        type='text'
                        title='電話番号'
                        width='600px'
                        backgroundColor='#fff'
                        value={contact.tell}
                        autoComplete='tel'
                        readonly={true}
                    />
                </div>
                <div className={styles.paddingTop}>
                    <Input
                        type='text'
                        title='メールアドレス'
                        width='600px'
                        backgroundColor='#fff'
                        value={contact.email}
                        autoComplete='email'
                        readonly={true}
                    />
                </div>
                <div className={styles.paddingTop}>
                    <Textarea
                        title='お問合せ内容'
                        width='600px'
                        height='200px'
                        backgroundColor='#fff'
                        value={contact.content}
                        readonly={true}
                    />
                </div>
            </div>
        )}
        </>
    );
}