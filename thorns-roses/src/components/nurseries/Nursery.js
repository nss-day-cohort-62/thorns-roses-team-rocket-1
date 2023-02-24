import { useEffect,useState } from "react"
import { getNurseryDistributors, getNurseryFlowers } from "../ApiManager"


export const Nursery = ({nurseryId, nurseryName}) => {
    const [flowers, setFlowers] = useState([])
    const [nurseryDistributors, setNurseryDistributors] = useState([])

    useEffect(
        () => {
            
            getNurseryFlowers(nurseryId)
            .then((flowersArray) => {
                setFlowers(flowersArray)


            })
        },[]
       )
       useEffect(
        () => {
            getNurseryDistributors(nurseryId)
            .then((nurseryDistributorsArray) => {
                setNurseryDistributors(nurseryDistributorsArray)

            })
        },[]
       )

    return <>
    <li className="card">
    <h2 className="title">{nurseryName}</h2>
    { flowers.map(nurseryFlower => {
       return <p>{nurseryFlower?.flower?.color} {nurseryFlower?.flower?.species}</p>
    })}
    <h2 className="mt-2 font-semibold">Distributors</h2>
    {
        nurseryDistributors.map(nurseryDistributor => {
            return <p className="">{nurseryDistributor?.distributor?.businessName}</p>
        })
    }
       </li>
       
    </>
}