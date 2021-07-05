import { createContext, useContext } from "react"


const OfferContext = createContext({
    activeTab: 0,
    setActiveTab: undefined
})
export const OfferProvider = OfferContext.Provider
export const useOfferProps = () => useContext(OfferContext);