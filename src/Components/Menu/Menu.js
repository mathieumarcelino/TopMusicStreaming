import React , {useContext} from'react';
import { AppContext } from '../../Context/AppContext';
import './Menu.css';

const Menu = () => {

    const [ , setContext] = useContext(AppContext);

    const updateCountry = (event) => {
        setContext({
            country: event.target.value,
            lastUpdateDate: null,
            lastUpdateTime: null,
            loading: true,
            error: null,
        })
    }

    return (
        <div className="menu">
            <div className="item-menu">
                <span className="text-menu">Choose country :</span>
                <select className="select-menu" onChange={updateCountry}>
                    <option value="ww">World</option>
                    <option value="us">United States</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                    <option value="es">Spain</option>
                    <option value="pt">Portugal</option>
                    <option value="it">Italy</option>
                </select>
            </div>
        </div>
    )
}

export default Menu
