import { Link, useNavigate } from "react-router-dom"


export const CustomerNav = () => {
    const navigate = useNavigate()

return (
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
			<li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("thorns_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li> 
    </ul>
)
        }

