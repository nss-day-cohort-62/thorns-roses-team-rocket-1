import { useEffect, useState } from "react"
import { getNurseries } from "../ApiManager"
import { Nursery } from "./Nursery"
import { getNurseryFlowers } from "../ApiManager"

export const NurseryList = () => {
    const [nurseries, setNurseries] = useState([])
    const [flowers, setFlowers] = useState([])

    useEffect(
        () => {
            getNurseries()
            .then((nurseriesArray) => {
                setNurseries(nurseriesArray)
              
            })
        },[]
    )
    

    useEffect(
        () => {
            getNurseryFlowers()
            .then((flowersArray) => {
                setFlowers(flowersArray)
                console.log(flowers)
            })
        },[nurseries]
       )
    
    






    return <>
    <ul>
    {
        nurseries.map(nursery => 
            <Nursery
            nurseryId={nursery.id}
            nurseryName={nursery.businessName}
            nurseryObject={nursery}
            flowers={flowers} />
        )
    }
    </ul>
    </>
}