
import { MailForm } from "../components/detail/MailForm.tsx";
import { Info } from "../components/detail/Info.tsx";

import styles from '../css/Detail.module.css'

export const Detail = () => {
    return (
        <div className={styles.detailContainer}>
            <Info />
            <MailForm />
        </div>
    );
}