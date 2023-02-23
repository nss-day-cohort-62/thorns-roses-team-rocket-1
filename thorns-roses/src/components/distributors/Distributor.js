import { useEffect, useState } from "react"
import { getNurseryFlowers, getRetailers } from "../ApiManager"

export const Distributor = ({ name, nurseryId, markUpPrice, distributorId}) => {
    const[flowers, setFlowers] = useState([])
    const [retailers, setRetailers] = useState([])

    useEffect(
        () => {
            getNurseryFlowers(nurseryId)
            .then((flowersArray) => {
                flowersArray.forEach(nurseryFlower => {
                   const newFlowerPrice = markUpPrice * nurseryFlower.flowerPrice
                   nurseryFlower.flowerPrice = newFlowerPrice.toFixed(2)
                  })
                  setFlowers(flowersArray)
                    }) 
            },
            []
        )
    useEffect(
        () => {
            getRetailers(distributorId)
            .then((retailerArray) => {
                setRetailers(retailerArray)
            })
        },
        [distributorId]
    )
    

    return <>
    <li>
        <h2>{name}</h2>
        {
            flowers.map(nurseryFlower => {
                return <p>{nurseryFlower?.flower?.color} {nurseryFlower?.flower?.species} {nurseryFlower?.flowerPrice}</p>
            })
            
        }
        {
            retailers.map(retailer => {
                return <p>{retailer?.businessName}</p>
            })
        }

    </li>
    </>
}