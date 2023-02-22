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
    <ul>
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