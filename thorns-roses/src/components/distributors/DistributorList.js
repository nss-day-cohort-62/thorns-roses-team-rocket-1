import { useEffect, useState } from "react"
import { getDistributors } from "../ApiManager"
import { Distributor } from "./Distributor"



export const DistributorList = () => {
    const [distributors, setDistributors] = useState([])
    

    useEffect(
        () => {
            getDistributors()
            .then((distributorArray) => {
                setDistributors(distributorArray)
              
            })
        },[]
    )
    

    
    
    

    return <>
    <ul>
    {
        distributors.map(nurseryDistributor => 
            <Distributor
            distributorId={nurseryDistributor.distributorId}
            name={nurseryDistributor?.distributor?.businessName}
            markUpPrice={nurseryDistributor?.distributor?.flowerMarkup}
            nurseryId={nurseryDistributor.nurseryId}
             />
        )
    }
    </ul>
    </>
}