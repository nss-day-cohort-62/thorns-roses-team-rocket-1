import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar"
import { ApplicationViews } from "./components/views/ApplicationViews"






export const ThornsAndRoses = () => {
	return <Routes>
		

		<Route path="*" element={
			
				<>
				<NavBar />
        <ApplicationViews />
				</>
			

		} />
	</Routes>
}
