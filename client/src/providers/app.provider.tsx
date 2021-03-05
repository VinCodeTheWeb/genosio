import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

interface IAppProviderProps {
    children: React.ReactNode;
}

export const AppContext = createContext({
    drawerState: false,
    toggleDrawerState: () => {},
});

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
    const [drawerState, setDrawerState] = useState<boolean>(false);

    const toggleDrawerState = () => setDrawerState(!drawerState);

    return (
        <AppContext.Provider
            value={{
                drawerState,
                toggleDrawerState,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

AppProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export { AppProvider };
