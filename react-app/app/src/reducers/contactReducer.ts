import type { Contact } from "../services/contactService.ts";

type State = {
    page: number;          // 現在のページ
    lastPage: number;      // 最後のページ（APIから更新される）
    firstName: string;     // 検索条件
    lastName: string;      // 検索条件
    email: string;         // 検索条件
    contacts: Contact[];   // 取得したデータ
    loading: boolean;      // ローディング状態
};

type Action =
    | { type: "SET_PAGE"; payload: number }
    | { type: "SET_LAST_PAGE"; payload: number }
    | { type: "SET_SEARCH"; field: "firstName" | "lastName" | "email"; value: string }
    | { type: "SET_CONTACTS"; payload: Contact[] }
    | { type: "SET_LOADING"; payload: boolean };


export const initialState: State = {
    page: 1,
    lastPage: 1,
    firstName: "",
    lastName: "",
    email: "",
    contacts: [],
    loading: false,
};

export function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_PAGE":
            return { ...state, page: action.payload };
        case "SET_LAST_PAGE":
            return { ...state, lastPage: action.payload };
        case "SET_SEARCH":
            return { ...state, [action.field]: action.value };
        case "SET_CONTACTS":
            return { ...state, contacts: action.payload };
        case "SET_LOADING":
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};
