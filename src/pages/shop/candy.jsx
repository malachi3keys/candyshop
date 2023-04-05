import { useContext } from "react"
import { ShopContext } from "../../context/shopContext"

export default function Candy(props){
    const { id, title, description, price, picture, altText, max_quantity } = props.data
    const { addToCart, cartItems } = useContext(ShopContext)
    const cartCount = cartItems[id]

    return(
        <div className="candy">
            <img className="candy-img" src={picture} alt={altText}/>
            <div className="candy-title">{title}</div>
            <div className="candy-price">${price}</div>
            <button className="cart-button" onClick={() => addToCart(id, cartCount, max_quantity)}>
                Add to Cart {cartCount > 0 && `(${cartCount})`}
            </button>
        </div>
    )
}