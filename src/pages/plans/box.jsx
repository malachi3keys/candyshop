import { useContext } from "react"
import { ShopContext } from "../../context/shopContext"

export default function Box(props){
    const { id, title, description, price, max_quantity } = props.data
    const { addToCart, cartItems } = useContext(ShopContext)
    const cartCount = cartItems[id]

    return(
        <div className="box">
            <div className="box-name">{title}</div>
            <div className="box-price">${price}</div>
            <div className="box-description">{description}</div>
            <button className="cart-button sub-button" onClick={() => addToCart(id, cartCount, max_quantity)}>Choose Plan</button>
        </div>
    )
}