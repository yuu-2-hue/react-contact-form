
import { useNavigate } from 'react-router-dom';

import { Input } from '../components/Input.tsx'
import {Textarea} from '../components/Textarea.tsx'

import styles from '../css/Contact.module.css'

export const Contact = () => {

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & {
            firstName: { value: string };
            lastName: { value: string };
            tell: { value: string };
            email: { value: string };
            content: { value: string };
        };

        console.log({
            firstName: target.firstName.value,
            lastName: target.lastName.value,
            tell: target.tell.value,
            email: target.email.value,
            content: target.content.value,
        });

        navigate('/thanks');
    };

    return (
        <>
            <h1 className={styles.title}>お問合せフォーム</h1>
            <form className={styles.container} onSubmit={handleSubmit}>
                <div className={styles.nameWrapper}>
                    <Input
                        type='text'
                        title='苗字'
                        name='firstName'
                        width='300px'
                        backgroundColor='#DFDFDF'
                        value=''
                        autoComplete='family-name'
                        readonly={false}
                    />
                    <Input
                        type='text'
                        title='名前'
                        name='lastName'
                        width='300px'
                        backgroundColor='#DFDFDF'
                        value=''
                        autoComplete='given-name'
                        readonly={false}
                    />
                </div>
                <div className={styles.wrapper}>
                    <Input
                        type='text'
                        title='電話番号'
                        name='tell'
                        width='700px'
                        backgroundColor='#DFDFDF'
                        value=''
                        autoComplete='tel'
                        readonly={false}
                    />
                </div>
                <div className={styles.wrapper}>
                    <Input
                        type='text'
                        title='メールアドレス'
                        name='email'
                        width='700px'
                        backgroundColor='#DFDFDF'
                        value=''
                        autoComplete='email'
                        readonly={false}
                    />
                </div>
                <div className={styles.wrapper}>
                    <Textarea
                        title='お問合せ内容'
                        name='content'
                        width='700px'
                        height='200px'
                        backgroundColor='#DFDFDF'
                        readonly={false}></Textarea>
                </div>
                <div className={styles.buttonWrapper}>
                    <button className={styles.button} type='submit'>送信</button>
                </div>
            </form>
        </>
    );
}

export default Contact
