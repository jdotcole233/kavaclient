import { createContext, useContext } from "react";


const AdminContext = createContext({
    user: undefined,
    company: undefined,
    linked_to: [],
    accessToken: ""
});

export const useAdminProps = () => useContext(AdminContext);

const AdminProvider = AdminContext.Provider
export default AdminProvider