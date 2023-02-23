import { useEffect, useState } from "react"
import { getPurchasedFlowers } from "../ApiManager"

export const MyCart = () => {
    const [purchases, setPurchases] = useState([])
    const localThornUser = localStorage.getItem("thorns_user")
    const thornUserObject = JSON.parse(localThornUser)
    const [totalPurchases, setTotalPurchases] = useState([])

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
<table>
<tr><td>Name</td><td>Total Cost</td><td>Total Quantity</td></tr>
{
purchases.map(purchase => {
    return <tr><td>{purchase?.flower?.color} {purchase?.flower?.species}</td><td>{(purchase.flowerPrice).toFixed(2)}</td><td>{purchase.quantity}</td></tr>
})
}

</table>


</>


}