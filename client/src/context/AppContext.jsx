import { createContext, useContext } from "react";

const AppContxt = createContext();

export const AppContextProvider = ({ children }) => {
    return (
        <AppContxt.Provider value={value}>
            {children}
        </AppContxt.Provider>
    )
};

export const useAppContext = () => useContext(AppContxt);