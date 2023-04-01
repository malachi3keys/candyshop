import { useContext } from "react"
import { ShopContext } from "../../context/shopContext"

export default function Checkout(props){
    const { addToCart, removeFromCart, updateCart, cartItems } = useContext(ShopContext)
    const cartCount = cartItems[props.id]

    return(
        <div className="checkout-item">
            <img className="checkout-img" src={props.picture} alt={props.altText}/>
            <div className="not-pic">
                <div className="name-div">
                    <div className="checkout-name">{props.title}</div>
                    <div className="checkout-price">${props.price}</div> 
                </div>
                  
                <div className="quantity">
                    <button className="minus" onClick={() => removeFromCart(props.id)}>-</button>
                    <input value={cartCount} className="number" onChange={(e) => updateCart(props.id, Number(e.target.value))}/>
                    <button className="plus" onClick={() => addToCart(props.id)}>+</button> 
                </div>  
            </div>
        </div>
    )
}