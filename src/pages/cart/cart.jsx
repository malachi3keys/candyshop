import Checkout from "./checkout"
import candyListings from "../../candyListings"
import { useContext } from "react"
import { ShopContext } from "../../context/shopContext"
import { FaCandyCane } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

export default function Cart() {
    const {cartItems, cartTotal} = useContext(ShopContext)
    const totalAmount = cartTotal()
    const navigate = useNavigate()

    const finalCart = candyListings.map((item, index) => {
        if(cartItems[item.id] > 0){
            return(
                <Checkout 
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                picture={item.picture}
                altText={item.alttext}
            />
            )
        } else {
            return false
        }
    })

    return (
        <div className="cart">
            <h1 className="cart-title">Cart <FaCandyCane /></h1>
            {totalAmount > 0 
            ? <div>
               <div className="cart-items">{finalCart}</div> 
               <div className="total"><b>Total:</b> ${totalAmount} </div>
            </div> 
            : <div>
                <div className="empty-cart">Cart is Empty</div>
            </div>
            }
                          
            <button className="continue" onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
    )
}
