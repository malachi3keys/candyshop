import { createContext, useState } from "react"
import candyListings from  "../candyListings"

export const ShopContext = createContext(null);

function defaultCart(){
    let cart = {}
    for(let i = 0; i < candyListings.length; i++){
        cart[i] = 0
    }

    return cart
}


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(defaultCart())

    const addToCart = (id, quantity, max) => {
        //don't go above max quantity available         
        if(quantity < max){
            setCartItems((prev) => ({...prev, [id]: quantity + 1}))
        }        
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => ({...prev, [id]: prev[id] - 1}))
    }

    const updateCart = (id, quantity, max) => {
        //check if entered value is a number and only allow up to max quantity
        if(!isNaN(quantity)) {
            if(quantity <= max){
                setCartItems((prev) => ({...prev, [id]: quantity}))
            } else {
                setCartItems((prev) => ({...prev, [id]: max}))
            }  
        }
    }

    const cartTotal = () => {
        let total = 0
        for(const item in cartItems){
            let itemInfo = candyListings.find((candy) => candy.id === Number(item))
        
            total += itemInfo.price * cartItems[item]  
        }

        return total
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCart, cartTotal}

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}