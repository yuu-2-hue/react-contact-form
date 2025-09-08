import axios from "axios";

export type Contact = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
};

export type ApiResponse = {
    data: Contact[];
    current_page: number;
    last_page: number;
    next_page_url: string | null;
    prev_page_url: string | null;
};

const API_URL = "http://localhost:8000/api/contact";

export const contactService = {
    async getContacts(page: number, firstName: string = "", lastName: string = "", email: string = "") : Promise<ApiResponse> {
        const response = await axios.get<ApiResponse>(
            `${API_URL}?page=${page}&firstName=${firstName}&lastName=${lastName}&email=${email}`
        );
        return response.data;
    },
};
