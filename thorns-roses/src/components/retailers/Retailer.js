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
        <li className="m-5 pb-10">
            <header className="text-lg font-bold ">{retailer?.businessName }</header>
            <div className="flex row gap-10">
            <div className="">
                <p>Distributor:</p>
                <p>{nurseryDistributors[0]?.distributor?.businessName}</p>
            </div>
                <ul>
                    <p>Nurseries: </p>
                    {
                        nurseryDistributors.map(nurseryDistributor => {
                            return  <li>{nurseryDistributor?.nursery.businessName}</li>
                            
                        })
                    }
                </ul>
                </div>
                <ul className="flex row ">
                    {
                        flowers.map(flower => {
                            return (
                             <li className="mr-8 border-2 border-black rounded flex flex-col items-center">
                                <img src={flower?.flower?.image} className="h-48 w-56 border border-black"/>
                                <p className="font-bold">{flower?.flower?.color} {flower?.flower?.species} ${flower.flowerPrice} </p>
                                 <button className="bg-red-400 rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider mb-2" onClick={(clickEvent) => PurchaseButton(clickEvent, flower)}>Purchase</button>
                             </li>
                            )
                        })
                    }
                </ul>
                <footer className="text-sm">{retailer?.address}</footer >
        </li>
    </>
}