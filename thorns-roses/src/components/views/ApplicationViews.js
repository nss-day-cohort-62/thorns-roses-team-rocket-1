
import { createContext, useEffect, useMemo, useState } from "react"
import { getPurchasedFlowers } from "../ApiManager"
import { NavBar } from "../nav/NavBar"
import { CustomerViews } from "./CustomerViews"
export const OrderContext = createContext({
	orderLength: 0,
	setOrderLength: () => { }
})
export const ApplicationViews = () => {
	const localThornUser = localStorage.getItem("thorns_user")
	const thornUserObject = JSON.parse(localThornUser)
	const [orderLength, setOrderLength] = useState([])

	const value = useMemo(
		() => ({ orderLength, setOrderLength }),
		[orderLength]
	);



	useEffect(
		() => {
			getPurchasedFlowers(thornUserObject.id)
				.then((purchaseArray) => {
					setOrderLength(purchaseArray.length)
				})
		}, []
	)








	return <>
		<OrderContext.Provider value={value}>
			
		<NavBar />
		<CustomerViews />
		</OrderContext.Provider>



	</>

}

