import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { products } from "../assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = 'Rs '; //Can change for anytime for all 
    const delivery_fee = 10;

    //searching logic
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(true);
    const navigate = useNavigate();
    //Add to cart
    const [cartItems,setCardItems] = useState({});


    const addToCart = async(itemId,size) =>{
        if(!size){
            toast.error("Select Product Size")
        } 
        

        let cartData  = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
                toast.success("Cart Added Check On Top")
            }
            else {
                toast.success("Cart Added Check On Top")
                cartData[itemId][size] = 1;
            }


        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
    
        setCardItems(cartData);
    }

    //for card Logic

    const getCardCount = ()=>{
        let total = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        total += cartItems[items][item]
                    }
                }
                catch (error){
                    console.log(error);
                }
            }
        }
        return total;
    }

    useEffect(() => {
        // console.log(cartItems);
     
    }, [cartItems])

    //delete card details

    const updateQ = async (itemId,size,quantity)=>{
        let cardData = structuredClone(cartItems);
        cardData[itemId][size] = quantity;
        setCardItems(cardData);
    } 


    //total Card amount

    const Amount =  () =>{
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product)=> (product._id === items));

            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalAmount = itemInfo.price * cartItems[items][item];

                    }
                    
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }




    

    const value = {
        products, currency, delivery_fee,search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,getCardCount,updateQ,Amount,navigate
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
