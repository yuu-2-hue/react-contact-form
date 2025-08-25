
import { Input } from '../components/Input.tsx'
import { Textarea } from '../components/Textarea.tsx'

import styles from '../css/Detail.module.css'

export const Detail = () => {
    return (
        <div className={styles.detailContainer}>
            <div className={styles.influenceWrapper}>
                <div className={styles.nameWrapper}>
                    <Input
                        type='text'
                        title='苗字'
                        width='250px'
                        backgroundColor='#fff'
                        value=''
                        autoComplete='family-name'
                        readonly={true}
                    />
                    <Input
                        type='text'
                        title='名前'
                        width='250px'
                        backgroundColor='#fff'
                        value=''
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
                        value=''
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
                        value=''
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
                        readonly={true}
                    />
                </div>
            </div>
            <form className={styles.influenceWrapper}>
                <div className={styles.wrapper}>
                    <Input
                        type='text'
                        title='件名'
                        width='600px'
                        backgroundColor='#fff'
                        value=''
                        autoComplete='off'
                        readonly={false}
                    />
                </div>
                <div className={styles.wrapper}>
                    <Textarea
                        title='本文'
                        width='600px'
                        height='434px'
                        backgroundColor='#fff'
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