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
        <header className="text-2xl font-body font-bold text-center bg-gray-200 pt-4">Our Distributors</header>
    <ul className="list flex row">
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