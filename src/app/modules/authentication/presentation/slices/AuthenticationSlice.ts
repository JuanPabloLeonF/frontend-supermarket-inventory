import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../../../share/context/Store";

interface InitialStateAuthentication {
    token: string | null;
    isAuthentication: boolean;
}

const initialStateAuthenticationData: InitialStateAuthentication = {
    token: null,
    isAuthentication: false
}

const authenticationSlice = createSlice({
    name: "authentication",
    initialState: initialStateAuthenticationData,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            state.isAuthentication = true;
        },
        logout: (state) => {
            state.token = null;
            state.isAuthentication = false;
        },
    }
});

export const { login, logout } = authenticationSlice.actions;

export const authenticationReducer = authenticationSlice.reducer;

export const selectToken = (state: RootState) => state.authentication.token; 
export const selectIsAuthentication = (state: RootState) => state.authentication.isAuthentication; 