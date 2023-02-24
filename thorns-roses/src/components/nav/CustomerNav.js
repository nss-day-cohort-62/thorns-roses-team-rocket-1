
import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { OrderContext } from "../views/ApplicationViews"





export const CustomerNav = () => {
    const navigate = useNavigate()
    const localThornUser = localStorage.getItem("thorns_user")
    const thornUserObject = JSON.parse(localThornUser)
   const {orderLength} = useContext(OrderContext)




return <>
 
    <ul className=" fixed w-full flex row justify-evenly font-body bg-gray-300">
       
        <li className="navbar__item">
			<Link to="/nurseries">Nurseries</Link>
			</li>

			<li className="navbar__item">
			<Link to="/distributors">Distributors</Link>
			</li>

			<li className="navbar__item">
			<Link to="/retailers">Retailers</Link>
			</li>
            <li className="navbar__item">
			<Link to="/cart">My Cart({orderLength})</Link>
			</li>


			<li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("thorns_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li> 
    </ul>

</>
        }

