
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
                    style={{ width: "240px", height:"30px", borderRadius:"5px", paddingInline: "5px"}}
                />
                <input
                    type="text"
                    placeholder="名前で検索"
                    value={lastNameSearch}
                    onChange={(e) => setLastNameSearch(e.target.value)}
                    style={{ width: "240px", height:"30px", borderRadius:"5px", paddingInline: "5px", marginLeft: "10px" }}
                />
                <input
                    type="text"
                    placeholder="メールアドレスで検索"
                    value={emailSearch}
                    onChange={(e) => setEmailSearch(e.target.value)}
                    style={{ width: "240px", height:"30px", borderRadius:"5px", paddingInline: "5px", marginLeft: "10px" }}
                />
                <button onClick={onSearch} style={{ width: "50px", height: "30px", marginLeft: "10px" }}>検索</button>
        </div>
    );
};
