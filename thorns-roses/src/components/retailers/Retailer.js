import { useContext, useEffect, useState } from "react"

import { AddNewPurchase, getNurseryDistributorsByDistributorId, getNurseryFlowers } from "../ApiManager"
import { OrderContext } from "../views/ApplicationViews"

export const Retailer = ({distributorId, retailer}) => {
    const [nurseryDistributors, setNurseryDistributors] = useState([])
    const [flowers, setNurseryFlowers] = useState([])
    const localThornUser = localStorage.getItem("thorns_user")
    const thornUserObject = JSON.parse(localThornUser)
    const {orderLength, setOrderLength} = useContext(OrderContext)
    useEffect(
        () => {
            
            getNurseryDistributorsByDistributorId(distributorId)
            .then((nurseryDistributorsArray) => {
                setNurseryDistributors(nurseryDistributorsArray)


            })
        },[] 
    )
    
    useEffect(
        () => {
            nurseryDistributors.map(nurseryDistributor => {
                getNurseryFlowers(nurseryDistributor.nurseryId)
                .then((nurseryFlowersArray) => {
                    nurseryFlowersArray.forEach(nurseryFlower => {
                        const newFlowerPrice = nurseryFlower.flowerPrice * retailer.flowerMarkup * nurseryDistributor.distributor.flowerMarkup
                        nurseryFlower.flowerPrice = newFlowerPrice.toFixed(2)
                       })
                       setNurseryFlowers(nurseryFlowersArray) 
                }) 
            })
        },[nurseryDistributors]
    )
        const PurchaseButton = (event, flower) => {
            event.preventDefault()

            const PurchaseToSendToApi = {
                customerId: thornUserObject.id,
                retailerId: retailer.id,
                flowerId: flower?.flower?.id,
                flowerPrice: parseFloat(flower?.flowerPrice,2)
            }
            AddNewPurchase(PurchaseToSendToApi)
                
                setOrderLength(orderLength + 1)
        }
       









    return <>
        <li className="m-5">
            <p>{retailer?.businessName }</p>
            <p>{retailer?.address}</p>
                <ul>
                    {
                        flowers.map(flower => {
                            return (
                             <li>{flower?.flower?.color} {flower?.flower?.species} {flower.flowerPrice} 
                                 <button className="btn" onClick={(clickEvent) => PurchaseButton(clickEvent, flower)}>Purchase</button>
                             </li>
                            )
                        })
                    }
                </ul>
            <p>{nurseryDistributors[0]?.distributor?.businessName}</p>
                <ul>
                    {
                        nurseryDistributors.map(nurseryDistributor => {
                            return  <li>{nurseryDistributor?.nursery.businessName}</li>
                            
                        })
                    }
                </ul>
        </li>
    </>
}