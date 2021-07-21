import { createContext, useContext } from "react";


const AuthProcessContext = createContext({
    company: undefined,
    setCompany: undefined
});

export const useAuthProcessProps = () => useContext(AuthProcessContext);

const AuthProcessProvider = AuthProcessContext.Provider
export default AuthProcessProvider