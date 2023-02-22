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
			
	
       
    </ul>
)
        }

