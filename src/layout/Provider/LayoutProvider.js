import { createContext, useContext } from 'react';


const LayoutContext = createContext({
    mobileMenuOpen: false,
    selectedOffer: undefined,
    setMobileMenuOpen: undefined,
    setSelectedOffer: undefined
});

export const useLayoutProps = () => useContext(LayoutContext);

export const LayoutProvider = LayoutContext.Provider;