import candyListings from "../../candyListings"
import Candy from "./candy"
import { FaCandyCane } from "react-icons/fa"

export default function Shop() {
    const listings = candyListings.map((candy, index) => {
        if(!candy.box){
         return(
            <Candy 
                key={index}
                data={candy}
            />
            )   
        }
    })


    return(
        <div className="shop">
            <h1 className="shop-title">Your pick of artisan treats <FaCandyCane /></h1>
            <div className="items">{listings}</div>
        </div>
    )
}