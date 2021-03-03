import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext({
    drawerState: false,
});

const AppProvider: React.FC = ({ children }) => {
    const [drawerState, setDrawerState] = useState<boolean>(true);

    return (
        <AppContext.Provider
            value={{
                drawerState,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider };
