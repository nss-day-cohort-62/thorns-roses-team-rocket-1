import { useEffect, useState } from "react"
import { getNurseryFlowers } from "../ApiManager"

export const Distributor = ({ name, nurseryId, markUpPrice}) => {
    const[flowers, setFlowers] = useState([])

    useEffect(
        () => {
            getNurseryFlowers({nurseryId})
            .then((flowersArray) => {
                flowersArray.forEach(nurseryFlower => {
                   Math.ceil(nurseryFlower.flowerPrice *= markUpPrice)
                  })
                  setFlowers(flowersArray)
                    }) 
            })

    

    // useEffect(
    //     () => {
            
    //       flowers.forEach(nurseryFlower => {
    //         parseFloat(nurseryFlower?.flower?.price) *= parseFloat(markUpPrice)
    //       })
    //       setFlowers(flowers)
    //         })
    //     },[]
    //    )

    return <>
    <li>
        <h2>{name}</h2>
        {
            flowers.map(nurseryFlower => {
                return <p>{nurseryFlower.flowerPrice}</p>
            })
        }

    </li>
    </>
}