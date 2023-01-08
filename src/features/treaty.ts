import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchTreaties_fetchTreaties_treaties } from "../graphql/queries/__generated__/FetchTreaties";

export type AllOffersState = {
    selectedTreaty: FetchTreaties_fetchTreaties_treaties | null
}

const initialState: AllOffersState = {
    selectedTreaty: null,
};

export const allOffers = createSlice({
    name: "treaties",
    initialState,
    reducers: {
        setSelectedTreaty: (state, { payload }: PayloadAction<FetchTreaties_fetchTreaties_treaties | null>) => {
            state.selectedTreaty = payload
        },

    },
});

// Action creators are generated for each case reducer function
export const { setSelectedTreaty } = allOffers.actions;

export default allOffers.reducer;
