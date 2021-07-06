import { createContext, useContext } from "react"


const TreatyContext = createContext({
    activeTab: 0,
    setActiveTab: undefined
})
export const TreatyProvider = TreatyContext.Provider
export const useTreatyProps = () => useContext(TreatyContext);