
import { Outlet, Routes, Route } from "react-router-dom"
import { DistributorList } from "../distributors/DistributorList"
import { NurseryList } from "../nurseries/NurseryList"
import { RetailerList } from "../retailers/RetailerList"

export const CustomerViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
          
                    

                    <Outlet />
                </>
            }>
				<>
                <Route path="nurseries" element={ <NurseryList/> } />
                <Route path="distributors" element={  <DistributorList/> } />
				<Route path="retailers" element={  <RetailerList/> } />
                
				
                
				</>
		
            </Route>
        </Routes>
    )
}

