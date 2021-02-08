import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [data, setData] = useState({
        country: "ww",
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