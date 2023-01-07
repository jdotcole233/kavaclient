import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Login_login } from "../graphql/mutations/__generated__/Login";

export interface UserState extends Login_login { }

const initialState: UserState = {
    access_token: "",
    user: null,
    __typename: "AuthPayload",
    refresh_token: null,
    expires_in: null,
    token_type: null
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        authenticate: (state, { payload }: PayloadAction<Login_login>) => {
            state.user = payload.user;
            state.access_token = payload.access_token;
        },
        logout: (state) => {
            state.user = null;
            state.access_token = "";
        },
    },
});

// Action creators are generated for each case reducer function
export const { authenticate, logout } = userSlice.actions;

export default userSlice.reducer;
