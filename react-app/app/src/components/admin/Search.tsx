
import styles from '../../css/Search.module.css'

type Props = {
    firstName: string;
    lastName: string;
    email: string;
    onChange: (field: "firstName" | "lastName" | "email", value: string) => void;
    onSearch: () => void;
};

export const Search = ({ firstName, lastName, email, onChange, onSearch }: Props) => {
    return (
        <div style={{ marginTop: "40px", marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="苗字で検索"
                value={firstName}
                onChange={(e) => onChange("firstName", e.target.value)}
                className={styles.input}
            />
            <input
                type="text"
                placeholder="名前で検索"
                value={lastName}
                onChange={(e) => onChange("lastName", e.target.value)}
                className={`${styles.input} ${styles.marginLeft}`}
            />
            <input
                type="text"
                placeholder="メールアドレスで検索"
                value={email}
                onChange={(e) => onChange("email", e.target.value)}
                className={`${styles.input} ${styles.marginLeft}`}
            />

            <button onClick={onSearch} className={`${styles.button} ${styles.marginLeft}`} >検索</button>
        </div>
    );
};
