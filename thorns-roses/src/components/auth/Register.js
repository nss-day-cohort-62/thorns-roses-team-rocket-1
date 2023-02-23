import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { findEmail, getRegister } from "../ApiManager"



export const Register = (props) => {
    const [customer, setCustomer] = useState({
        email: "",
        name: "",
        businessName: "",
        password: ""
    })
    let navigate = useNavigate()

    const registerNewUser = () => {
        getRegister(customer)
            .then(createdCustomer => {
                if (createdCustomer.hasOwnProperty("id")) {
                    localStorage.setItem("thorns_user", JSON.stringify({
                        id: createdCustomer.id
                    }))

                    navigate("/")
                }
            })
    }

    const handleRegister = (e) => {
        e.preventDefault()
        findEmail(customer)
            .then(response => {
                if (response.length > 0) {
                    // Duplicate email. No good.
                    window.alert("Account with that email address already exists")
                }
                else {
                    // Good email, create user.
                    registerNewUser()
                }
            })
    }

    const updateUser = (evt) => {
        const copy = {...customer}
        copy[evt.target.id] = evt.target.value
        setCustomer(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={handleRegister}>
                <h1>Please Register for Thorns and Roses</h1>
                <fieldset>
                    <label htmlFor="fullName"> Name </label>
                    <input onChange={updateUser}
                           type="text" id="name" className="form-control"
                           placeholder="Enter your name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="businessName"> Business Name </label>
                    <input onChange={updateUser}
                        type="text" id="businessName" className="form-control"
                        placeholder="Business name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="email"> Email address </label>
                    <input onChange={updateUser}
                        type="email" id="email" className="form-control"
                        placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="password"> Password</label>
                    <input onChange={updateUser}
                        type="password" id="password" className="form-control"
                        placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}