import { useEffect,useState } from "react"
import { getNurseryDistributors, getNurseryFlowers } from "../ApiManager"


export const Nursery = ({nurseryId, nurseryName}) => {
    const [flowers, setFlowers] = useState([])
    const [nurseryDistributors, setNurseryDistributors] = useState([])

    useEffect(
        () => {
            
            getNurseryFlowers({nurseryId})
            .then((flowersArray) => {
                setFlowers(flowersArray)


            })
        },[]
       )
       useEffect(
        () => {
            getNurseryDistributors({nurseryId})
            .then((nurseryDistributorsArray) => {
                setNurseryDistributors(nurseryDistributorsArray)

            })
        },[]
       )

    return <>
    <li className="m-5">
    <h2>{nurseryName}</h2>
    { flowers.map(nurseryFlower => {
       return <p>{nurseryFlower?.flower?.color} {nurseryFlower?.flower?.species}</p>
    })}
    {
        nurseryDistributors.map(nurseryDistributor => {
            return <p>{nurseryDistributor?.distributor?.businessName}</p>
        })
    }
       </li>
       
    </>
}