import { useEffect,useState } from "react"


export const Nursery = ({nurseryId, nurseryName, flowers}) => {
 

   let foundNurseryFlowers = flowers.filter(flower => nurseryId === flower.nurseryId)
  







    return <>
    <li>
    <h2>{nurseryName}</h2>
    { foundNurseryFlowers.map(flower => {
        <p>{flower.color}{flower.species}</p>
    })}
       </li>
    </>
}