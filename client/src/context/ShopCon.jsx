import { createContext, useState } from "react";
import { products } from "../assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'Rs '; // Can change for anytime for all 
    const delivery_fee = 10;

    //searching logic
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(true);

    const value = {
        products, currency, delivery_fee,search,setSearch,showSearch,setShowSearch
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
