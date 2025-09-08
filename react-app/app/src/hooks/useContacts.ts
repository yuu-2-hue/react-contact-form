import { useReducer, useCallback } from "react";
import { contactService } from "../services/contactService.ts";

import { reducer, initialState } from "../reducers/contactReducer";

export const useContacts = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchContacts = useCallback(async (page = 1) => {
        dispatch({ type: "SET_LOADING", payload: true });
        try {
            const data = await contactService.getContacts(
                page,
                state.firstName,
                state.lastName,
                state.email
            );
            dispatch({ type: "SET_CONTACTS", payload: data.data });
            dispatch({ type: "SET_PAGE", payload: data.current_page });
            dispatch({ type: "SET_LAST_PAGE", payload: data.last_page });
        } catch (err) {
            console.error("API Error:", err);
        } finally {
            dispatch({ type: "SET_LOADING", payload: false });
        }
    }, [state.firstName, state.lastName, state.email]);

    return { state, dispatch, fetchContacts };
};
