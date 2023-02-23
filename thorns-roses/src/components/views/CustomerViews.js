
import { Outlet, Routes, Route } from "react-router-dom"
import { MyCart } from "../cart/MyCart"
import { DistributorList } from "../distributors/DistributorList"
import { NurseryList } from "../nurseries/NurseryList"
import { RetailerList } from "../retailers/RetailerList"

export const CustomerViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Thorns and Roses</h1>
                    

                    <Outlet />
                </>
            }>
				<>
                <Route path="nurseries" element={ <NurseryList/> } />
                <Route path="distributors" element={  <DistributorList/> } />
				<Route path="retailers" element={  <RetailerList/> } />
                <Route path="cart" element={ <MyCart/> } />
                
				
                
				</>
		
            </Route>
        </Routes>
    )
}

