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
        <ul className="flex flex-col justify-center items-center font-body text-gray-800">
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