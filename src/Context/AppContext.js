// ----- IMPORT -----
import React, { createContext, useState } from "react";
// ------------------


export const AppContext = createContext();

export const AppProvider = (props) => {
    let currentCountry = 'us'
    let currentLocation = window.location.pathname.split("/").join("");
    if(currentLocation !== '' && (currentLocation === 'us' || currentLocation === 'fr' || currentLocation === 'de' || currentLocation === 'es' || currentLocation === 'pt' || currentLocation === 'it')){
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