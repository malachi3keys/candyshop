import { useContext } from "react"
import { ShopContext } from "../../context/shopContext"

export default function Checkout(props){
    const { id, title, price, picture, altText, max_quantity } = props.data
    const { addToCart, removeFromCart, updateCart, cartItems } = useContext(ShopContext)
    const cartCount = cartItems[id]

    function selectText(e){
        e.focus();
        e.select();
    }

    return(
        <div className="checkout-item">
            <img className="checkout-img" src={picture} alt={altText}/>
            <div className="not-pic">
                <div className="name-div">
                    <div className="checkout-name">{title}</div>
                    <div className="checkout-price">${price}</div> 
                </div>
                  
                <div className="quantity">
                    <button className="minus" onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartCount} className="number" onClick={(e) => selectText(e.target)} onChange={(e) => updateCart(id, Number(e.target.value), max_quantity)}/>
                    <button className="plus" onClick={() => addToCart(id, cartCount, max_quantity)}>+</button> 
                </div>  
            </div>
        </div>
    )
}