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
    <li className="card">
        <h2 className="title">{name}</h2>
        { flowers.map(nurseryFlower => {
                return <p>{nurseryFlower?.flower?.color} {nurseryFlower?.flower?.species} {nurseryFlower?.flowerPrice}</p>
            })
            
        }
        <h3 className="font-bold">Retailers</h3><div className="flex row justify-between">
        { retailers.map(retailer => {
                return <p>{retailer?.businessName}</p>
            })
        }
</div>
    </li>
    </>
}