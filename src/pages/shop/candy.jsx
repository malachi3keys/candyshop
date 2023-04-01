import { useContext } from "react"
import { ShopContext } from "../../context/shopContext"

export default function Candy(props){
    const { addToCart, cartItems } = useContext(ShopContext)
    const cartCount = cartItems[props.id]

    return(
        <div className="candy">
            <img className="candy-img" src={props.picture} alt={props.altText}/>
            <div className="candy-title">{props.title}</div>
            <div className="candy-price">${props.price}</div>
            <button className="cart-button" onClick={() => addToCart(props.id)}>
                Add to Cart {cartCount > 0 && `(${cartCount})`}
            </button>
        </div>
    )
}