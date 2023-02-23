import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { getPurchasedFlowers } from "../ApiManager"


export const CustomerNav = () => {
    const navigate = useNavigate()
    const localThornUser = localStorage.getItem("thorns_user")
    const thornUserObject = JSON.parse(localThornUser)
    const [totalPurchases, setTotalPurchases] = useState([])

useEffect(
    () => {
        getPurchasedFlowers(thornUserObject.id)
        .then((purchaseArray) => {
            setTotalPurchases(purchaseArray)
        })
    },[]
)

return <>
 
    <ul className="flex row justify-evenly">
       
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
			<Link to="/cart">My Cart({totalPurchases.length})</Link>
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

