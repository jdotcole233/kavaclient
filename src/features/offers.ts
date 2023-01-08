import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FetchOffers_fetchOffers_offers } from "../graphql/queries/__generated__/FetchOffers";
import { BrokerTypes } from "../graphql/__generated__/globalTypes";

export type AllOffersState = {
    selectedOffer: FetchOffers_fetchOffers_offers | null
    broker: BrokerTypes | null
}

const initialState: AllOffersState = {
    selectedOffer: null,
    broker: null
};

export const allOffers = createSlice({
    name: "offers",
    initialState,
    reducers: {
        setSelectedOffer: (state, payload: PayloadAction<FetchOffers_fetchOffers_offers | null>) => {
            state.selectedOffer = payload.payload
        },
        setActiveBroker: (state, { payload }: PayloadAction<BrokerTypes>) => {
            state.broker = payload
        }
    },
});

// Action creators are generated for each case reducer function
export const { setSelectedOffer, setActiveBroker } = allOffers.actions;

export default allOffers.reducer;
