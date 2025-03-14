// ----- IMPORT -----
import React, { createContext, useState } from "react";
// ------------------


export const AppContext = createContext();

export const AppProvider = (props) => {
    const validCountries = ['ww', 'us', 'fr', 'uk', 'jp', 'kr', 'tr', 'de', 'es', 'pt', 'it'];
    let currentCountry = 'ww'
    let currentLocation = window.location.pathname.split("/").join("");
    if (currentLocation !== '' && validCountries.includes(currentLocation)){
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