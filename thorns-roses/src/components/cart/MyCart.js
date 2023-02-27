import { createContext, useEffect, useMemo, useState } from "react"
import { ThornsAndRoses } from "../../App"
import { getPurchasedFlowers } from "../ApiManager"
import { CustomerNav } from "../nav/CustomerNav"
import { Retailer } from "../retailers/Retailer"


export const MyCart = () => {
    const [purchases, setPurchases] = useState([])
    const localThornUser = localStorage.getItem("thorns_user")
    const thornUserObject = JSON.parse(localThornUser)
    
useEffect(
    () => {
        getPurchasedFlowers(thornUserObject.id)
        .then((purchaseArray) => {
          
          const reducedPurchases =  purchaseArray.reduce((acc, purchase) => {
            const foundPurchase = acc.find((object) => purchase.flowerId === object.flowerId)
            if (foundPurchase) {
               foundPurchase.flowerPrice += purchase.flowerPrice
                foundPurchase.quantity ++
            }
            else{
                purchase.quantity = 1
                acc.push(purchase)

            }
            return acc
           },[] )
            setPurchases(reducedPurchases)
        })
    },[]
)





return <>
<div className="receipt w-1/4 m-10 p-10 text-center flex-col container rounded ml-auto mr-auto">
   <header className="font-receipt text-4xl">Flower Cart</header>
<ul className="font-receipt text-2xl ">

{
purchases.map(purchase => {
    return <li className="flex row justify-evenly m-5"><p>{purchase.quantity}</p><p>{purchase?.flower?.color} {purchase?.flower?.species}</p><p>{(purchase.flowerPrice).toFixed(2)}</p></li>
})
}

</ul>
<footer className="font-receipt text-4xl pt-10">Have a great day! </footer>
</div>

</>


}