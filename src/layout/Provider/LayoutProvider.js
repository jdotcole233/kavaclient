import { createContext, useContext } from 'react';


const LayoutContext = createContext({
    mobileMenuOpen: false,
    setMobileMenuOpen: undefined
});

export const useLayoutProps = () => useContext(LayoutContext);

export const LayoutProvider = LayoutContext.Provider;