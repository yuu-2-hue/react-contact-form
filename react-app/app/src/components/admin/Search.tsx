
import styles from '../../css/Search.module.css'

type SearchProps = {
    firstNameSearch: string;
    lastNameSearch: string;
    emailSearch: string;
    setFirstNameSearch: (value: string) => void;
    setLastNameSearch: (value: string) => void;
    setEmailSearch: (value: string) => void;
    onSearch: () => void;
};

export const Search = ({ firstNameSearch, lastNameSearch, emailSearch, setFirstNameSearch, setLastNameSearch, setEmailSearch, onSearch, }: SearchProps) => {
    return (
        <div style={{ marginTop: "40px", marginBottom: "20px" }}>
            <input
                type="text"
                placeholder="苗字で検索"
                value={firstNameSearch}
                onChange={(e) => setFirstNameSearch(e.target.value)}
                className={styles.input}
            />
            <input
                type="text"
                placeholder="名前で検索"
                value={lastNameSearch}
                onChange={(e) => setLastNameSearch(e.target.value)}
                className={`${styles.input} ${styles.marginLeft}`}
            />
            <input
                type="text"
                placeholder="メールアドレスで検索"
                value={emailSearch}
                onChange={(e) => setEmailSearch(e.target.value)}
                className={`${styles.input} ${styles.marginLeft}`}
            />
            <button onClick={onSearch} className={`${styles.button} ${styles.marginLeft}`} >検索</button>
        </div>
    );
};
