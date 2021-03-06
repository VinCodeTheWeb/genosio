import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

interface IAppProviderProps {
    children: React.ReactNode;
}

export const AppContext = createContext({
    drawer: false,
    toggleDrawer: () => {},
});

const AppProvider: React.FC<IAppProviderProps> = ({ children }) => {
    const [drawer, setDrawer] = useState<boolean>(false);

    const toggleDrawer = () => setDrawer(!drawer);

    return (
        <AppContext.Provider
            value={{
                drawer,
                toggleDrawer,
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
