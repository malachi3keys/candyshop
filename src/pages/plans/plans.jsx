import candyListings from "../../candyListings"
import Box from "./box"
import { FaCandyCane } from "react-icons/fa"

export default function Plans() {
    const boxes = candyListings.map((candy, index) => {
        if(candy.box){
         return(
            <Box 
                key={index}
                data={candy}
            />
            )   
        }
    })


    return(
        <div className="plans">
            <h1 className="plans-title">Subscription Boxes <FaCandyCane /></h1>
            <div className="options">{boxes}</div>
        </div>
    )
}