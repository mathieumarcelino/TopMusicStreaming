// ----- IMPORT -----
import React , { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import './Menu.css';
// ------------------

const Menu = () => {

    const [context, setContext] = useContext(AppContext);

    const updateCountry = (event) => {
        window.history.replaceState(null, '', `/${event.target.value}`);
        setContext({
            country: event.target.value,
            lastUpdateDate: null,
            lastUpdateTime: null,
            loading: true,
            error: null,
        });
    }

    return (
        <div className="menu">
            <div className="item-menu">
                <span className="text-menu">Choose a location :</span>
                <select className="select-menu" onChange={updateCountry}>
                    <option selected={context.country === "ww" ? "selected" : ""} value="ww">Worldwide</option>
                    <option selected={context.country === "us" ? "selected" : ""} value="us">United States</option>
                    <option selected={context.country === "fr" ? "selected" : ""} value="fr">France</option>
                    <option selected={context.country === "uk" ? "selected" : ""} value="uk">United Kingdom</option>
                    <option selected={context.country === "jp" ? "selected" : ""} value="jp">Japan</option>
                    <option selected={context.country === "kr" ? "selected" : ""} value="kr">South Korea</option>
                    <option selected={context.country === "tr" ? "selected" : ""} value="tr">Turkey</option>
                    <option selected={context.country === "de" ? "selected" : ""} value="de">Germany</option>
                    <option selected={context.country === "es" ? "selected" : ""} value="es">Spain</option>
                    <option selected={context.country === "pt" ? "selected" : ""} value="pt">Portugal</option>
                    <option selected={context.country === "it" ? "selected" : ""} value="it">Italy</option>
                </select>
            </div>
        </div>
    )
}

export default Menu
