import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SettingsState = {
    mobileMenuOpen: boolean
}

const initialState: SettingsState = {
    mobileMenuOpen: false
};

export const seetingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setMobileMenuOpen: (state, payload: PayloadAction<boolean>) => { }
    },
});

// Action creators are generated for each case reducer function
export const { setMobileMenuOpen } = seetingsSlice.actions;

export default seetingsSlice.reducer;
