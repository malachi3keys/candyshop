import { useContext } from "react"
import { ShopContext } from "../../context/shopContext"

export default function Box(props){
    const { addToCart } = useContext(ShopContext)

    return(
        <div className="box">
            <div className="box-name">{props.title}</div>
            <div className="box-price">${props.price}</div>
            <div className="box-description">{props.description}</div>
            <button className="cart-button sub-button" onClick={() => addToCart(props.id)}>Choose Plan</button>
        </div>
    )
}