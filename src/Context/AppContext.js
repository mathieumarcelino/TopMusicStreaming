import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    let currentCountry = 'ww'
    let currentLocation = window.location.pathname.substr(1);
    if(currentLocation !== '' && (currentLocation === 'ww' || currentLocation === 'us' || currentLocation === 'fr' || currentLocation === 'de' || currentLocation === 'es' || currentLocation === 'pt' || currentLocation === 'it')){
        currentCountry = currentLocation;
    }
    const [data, setData] = useState({
        country: currentCountry,
        lastUpdateDate: null,
        lastUpdateTime: null,
        loading: true,
        error: null,
    });

    return(
        <AppContext.Provider value={[data, setData]}>
            {props.children}
        </AppContext.Provider>
    );
};