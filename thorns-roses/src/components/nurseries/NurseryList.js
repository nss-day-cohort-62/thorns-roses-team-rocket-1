import { useEffect, useState } from "react"
import { getNurseries } from "../ApiManager"
import { Nursery } from "./Nursery"


export const NurseryList = () => {
    const [nurseries, setNurseries] = useState([])
    

    useEffect(
        () => {
            getNurseries()
            .then((nurseriesArray) => {
                setNurseries(nurseriesArray)
              
            })
        },[]
    )
    

    
    
    

    return <>
    <header className="text-2xl font-body font-bold text-center bg-gray-200 pt-4">Our Nurseries</header>
    <ul className="list flex row ">
    {
        nurseries.map(nursery => 
            <Nursery
            nurseryId={nursery.id}
            nurseryName={nursery.businessName}
            nurseryObject={nursery}
             />
        )
    }
    </ul>

    </>
}