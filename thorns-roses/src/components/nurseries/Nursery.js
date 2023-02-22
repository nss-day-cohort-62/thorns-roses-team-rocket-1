import { useEffect,useState } from "react"
import { getNurseryFlowers } from "../ApiManager"


export const Nursery = ({nurseryId, nurseryName}) => {
    const [flowers, setFlowers] = useState([])
 

    useEffect(
        () => {
            if(nurseryId){
            getNurseryFlowers({nurseryId})
            .then((flowersArray) => {
                setFlowers(flowersArray)
                console.log(flowers)

            })}
            else {
                
            }
        },[]
       )


    return <>
    <li>
    <h2>{nurseryName}</h2>
    { flowers.map(flower => {
       return <p>{flower?.flower?.color} {flower?.flower?.species}</p>
    })}
       </li>
       
    </>
}