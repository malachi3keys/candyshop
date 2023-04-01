import candyListings from "../../candyListings"
import Box from "./box"
import { FaCandyCane } from "react-icons/fa"

export default function Plans() {
    const boxes = candyListings.map((candy, index) => {
        if(candy.box){
         return(
            <Box 
                key={index}
                id={candy.id}
                title={candy.title}
                description={candy.description}
                price={candy.price}
                picture={candy.picture}
                altText={candy.alttext}
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