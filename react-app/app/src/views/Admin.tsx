
import { Table } from '../components/admin/Table';
import { Search } from '../components/admin/Search';
import { Pagination } from '../components/admin/Pagination';

// import styles from '../css/Admin.module.css'

import { useEffect, useState } from "react";

import axios from "axios";

type Contact = {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
};

type ApiResponse = {
    data: Contact[];
    current_page: number;
    last_page: number;
    next_page_url: string | null;
    prev_page_url: string | null;
};

export const Admin = () => {

    const [contacts, setContacts] = useState<Contact[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    const [firstNameSearch, setFirstNameSearch] = useState("");
    const [lastNameSearch, setLastNameSearch] = useState("");
    const [emailSearch, setEmailSearch] = useState("");

    const fetchContacts = async (page: number, firstName: string = "", lastName: string="",  email: string = "") => {
        const response = await axios.get<ApiResponse>(
            `http://localhost:8000/api/contact?page=${page}&firstName=${firstName}&lastName=${lastName}&email=${email}`
        );
        setContacts(response.data.data);
        setCurrentPage(response.data.current_page);
        setLastPage(response.data.last_page);
    };

    useEffect(() => {
        fetchContacts(1);
    }, []);

    const handleSearch = () => {
        fetchContacts(1, firstNameSearch, lastNameSearch, emailSearch);
    };

    const handlePageChange = (page: number) => {
        fetchContacts(page, firstNameSearch, lastNameSearch, emailSearch);
    };

    return (
        <div style={{ maxWidth: "800px", textAlign: "center", margin: "0 auto" }}>
            <Search
                firstNameSearch={firstNameSearch}
                lastNameSearch={lastNameSearch}
                emailSearch={emailSearch}
                setFirstNameSearch={setFirstNameSearch}
                setLastNameSearch={setLastNameSearch}
                setEmailSearch={setEmailSearch}
                onSearch={handleSearch}
            />

            <Table contacts={contacts} />

            <Pagination
                currentPage={currentPage}
                lastPage={lastPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}