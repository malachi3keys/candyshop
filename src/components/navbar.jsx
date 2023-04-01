import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { GiSpiralLollipop } from "react-icons/gi";


export default function Navbar() {
    return(
        <div className="navbar">
                <div className="logo">
                    <Link to="/">Candy Shop <GiSpiralLollipop /></Link>
                </div>
                <div className="page-links"><Link to="/">Shop</Link></div>
                <div className="page-links"><Link to="/plans">Subscriptions</Link></div>
                <div className="page-links"><Link to="cart"><FaShoppingCart /></Link></div>
        </div>
    )
}