
import { useEffect } from "react";
import { useContacts } from "../hooks/useContacts";

import { Table } from '../components/admin/Table';
import { Search } from '../components/admin/Search';
import { Pagination } from '../components/admin/Pagination';

export const Admin = () => {

    const { state, dispatch, fetchContacts } = useContacts();

    // 初回ロード時
    useEffect(() => {
        fetchContacts(1);
    }, []);

    // 検索ボタン押下時
    const handleSearch = () => {
        fetchContacts(1);
    };

    // ページ切り替え時
    const handlePageChange = (page: number) => {
        fetchContacts(page);
    };

    return (
        <div style={{ maxWidth: "800px", textAlign: "center", margin: "0 auto" }}>
            <Search
                firstName={state.firstName}
                lastName={state.lastName}
                email={state.email}
                onChange={(field, value) =>dispatch({ type: "SET_SEARCH", field, value })}
                onSearch={handleSearch}
            />

            {state.loading ? <p>Loading...</p> : <Table contacts={state.contacts} />}

            <Pagination
                currentPage={state.page}
                lastPage={state.lastPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}