
import { useNavigate } from 'react-router-dom';

import styles from '../../css/Table.module.css'

type Contact = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
};

type TableProps = {
    contacts: Contact[];
};

export const Table = ({ contacts }: TableProps) => {

    const navigate = useNavigate();

    const handleToDetail = (id: number) => {
        navigate(`/admin/detail/${id}`);
    };

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>名前</th>
                    <th>メールアドレス</th>
                    <th>詳細</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) =>
                    <tr key={contact.id}>
                        <td>{contact.firstName + ' ' + contact.lastName}</td>
                        <td>{contact.email}</td>
                        <td><button className={styles.button} onClick={()=>handleToDetail(contact.id)}>詳細</button></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}