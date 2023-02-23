import { useEffect, useState } from "react"
import { getNurseryDistributorsByDistributorId, getNurseryFlowers } from "../ApiManager"

export const Retailer = ({distributorId, retailer}) => {
    const [nurseryDistributors, setNurseryDistributors] = useState([])
    const [flowers, setNurseryFlowers] = useState([])
    
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



    return <>
        <li>
            <p>{retailer?.businessName }</p>
            <p>{retailer?.address}</p>
                <ul>
                    {
                        flowers.map(flower => {
                            return  <li>{flower?.flower?.color} {flower?.flower?.species} {flower.flowerPrice}</li>
                            
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