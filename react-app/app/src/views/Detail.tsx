
import { Input } from '../components/Input.tsx'
import { Textarea } from '../components/Textarea.tsx'

import styles from '../css/Detail.module.css'

export const Detail = () => {
    return (
        <div className={styles.detailContainer}>
            <div className={styles.influenceWrapper}>
                <div className={styles.nameWrapper}>
                    <div className="first-name">
                        <Input type='text' title='苗字' name='first-name' width='250px' height='43px' backgroundColor='#fff' value='' autoComplete='family-name' readonly={true} />
                    </div>
                    <div className="last-name">
                        <Input type='text' title='名前' name='last-name' width='250px' height='43px' backgroundColor='#fff' value='' autoComplete='given-name' readonly={true} />
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <Input type='text' title='電話番号' name='tell' width='600px' height='43px' backgroundColor='#fff' value='' autoComplete='tel' readonly={true} />
                </div>
                <div className={styles.wrapper}>
                    <Input type='text' title='メールアドレス' name='email' width='600px' height='43px' backgroundColor='#fff' value='' autoComplete='email' readonly={true} />
                </div>
                <div className={styles.wrapper}>
                    <Textarea title='お問合せ内容' name='content' width='600px' height='200px' backgroundColor='#fff' readonly={true}></Textarea>
                </div>
            </div>
            <div className={styles.influenceWrapper}>
                <div className={styles.wrapper}>
                    <Input type='text' title='件名' name='title' width='600px' height='43px' backgroundColor='#fff' value='' autoComplete='off' readonly={false} />
                </div>
                <div className={styles.wrapper}>
                    <Textarea title='本文' name='main' width='600px' height='434px' backgroundColor='#fff' readonly={false}></Textarea>
                </div>
            </div>
        </div>
    );
}