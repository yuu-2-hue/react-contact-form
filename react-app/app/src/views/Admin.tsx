import styles from '../css/Admin.module.css'

export const Admin = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.searchWrapper}>
                    <input type="text" placeholder='名前を入力してください' />
                    <input type="text" placeholder='メールアドレスを入力してください' />
                    <button><img src="search.png" alt="" /></button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>名前</th>
                            <th>メールアドレス</th>
                            <th>詳細</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>山田太郎</td>
                            <td>yamada@example.com</td>
                            <td><button>詳細</button></td>
                        </tr>
                        <tr>
                            <td>山田太郎</td>
                            <td>yamada@example.com</td>
                            <td><button>詳細</button></td>
                        </tr>
                        <tr>
                            <td>山田太郎</td>
                            <td>yamada@example.com</td>
                            <td><button>詳細</button></td>
                        </tr>
                        <tr>
                            <td>山田太郎</td>
                            <td>yamada@example.com</td>
                            <td><button>詳細</button></td>
                        </tr>
                        <tr>
                            <td>山田太郎</td>
                            <td>yamada@example.com</td>
                            <td><button>詳細</button></td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.paginationWrapper}>
                    <button><img src="leftArrow.png" alt="" /></button>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span>5</span>
                    <button><img src="rightArrow.png" alt="" /></button>
                </div>
            </div>
        </>
    );
}