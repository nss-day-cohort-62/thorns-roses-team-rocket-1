import { useEffect, useState } from "react"
import { getRetailersWithDistributor } from "../ApiManager"
import { Retailer } from "./Retailer"

export const RetailerList =() => {
    const [retailers, setRetailers] = useState([])
    

    useEffect(
        () => {
            getRetailersWithDistributor()
            .then((retailerArray) => {
                setRetailers(retailerArray)
              
            })
        },[]
    )
    

    
    
    

    return <>
        <ul>
            {
                retailers.map(retailer => 
                    <Retailer
                distributorId={retailer.distributorId}
                retailer = {retailer}
                />
                )
            }
        </ul>
    </>
}