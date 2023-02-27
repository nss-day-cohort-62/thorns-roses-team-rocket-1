
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { OrderContext } from "../views/ApplicationViews"





export const CustomerNav = () => {
    const navigate = useNavigate()
    const localThornUser = localStorage.getItem("thorns_user")
    const thornUserObject = JSON.parse(localThornUser)
   const {orderLength} = useContext(OrderContext)




return <>
 
    <ul className=" fixed w-full flex row justify-evenly text-lg font-body border-third border-b-4 lowercase bg-primary text-gray-700">
       
        <li className="navbar__item transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
			<Link to="/nurseries">Nurseries</Link>
			</li>
            <li> |</li>

			<li className="navbar__item transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
			<Link to="/distributors">Distributors</Link>
			</li>
            <li> |</li>
			<li className="navbar__item transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
			<Link to="/retailers">Retailers</Link>
			</li>
            <li> |</li>
            <li className="navbar__item transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
			<Link to="/cart">My Cart ({orderLength})</Link>
			</li>
            <li> |</li>

			<li className="navbar__item navbar__logout transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("thorns_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li> 
    </ul>

</>
        }

