import { createContext, useEffect } from 'react';
import { food_list } from '../assets/Image/frontend_assets/assets';
import { useState } from 'react';

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState({});
    const addTocart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromcart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const deleteFromcart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]*0}))
    }

    const cartTotal = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = food_list.find((Product)=> Product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addTocart,
        removeFromcart,
        deleteFromcart,
        cartTotal
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
