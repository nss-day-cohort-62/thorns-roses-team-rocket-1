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
        <li className="m-5 pb-10 ">
            <header className="text-4xl font-bold text-center  text-gray-600 ">{retailer?.businessName }</header>
            <div className="flex row gap-10 justify-evenly">
            <div className="flex-col ">
                <p className="underline">Distributor</p>
                <p>{nurseryDistributors[0]?.distributor?.businessName}</p>
            </div>
                <ul>
                    <p className="underline">Nurseries </p>
                    {
                        nurseryDistributors.map(nurseryDistributor => {
                            return  <li>{nurseryDistributor?.nursery.businessName}</li>
                            
                        })
                    }
                </ul>
                </div>
                <ul className="flex row">
                    {
                        flowers.map(flower => {
                            return (
                             <li className="mr-8 border-2 border-black rounded flex flex-col items-center bg-gray-200 shadow-2xl">
                                <img src={flower?.flower?.image} className="h-48 w-56 border border-black"/>
                                <p className="font-bold">{flower?.flower?.color} {flower?.flower?.species}</p><p> ${flower.flowerPrice} </p>
                                 <button className="bg-third text-white rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider mb-2  hover:bg-primary hover:text-white transition ease-out duration-500" onClick={(clickEvent) => PurchaseButton(clickEvent, flower)}>Purchase</button>
                             </li>
                            )
                        })
                    }
                </ul>
                <footer className="text-sm">{retailer?.address}</footer >
        </li>
    </>
}