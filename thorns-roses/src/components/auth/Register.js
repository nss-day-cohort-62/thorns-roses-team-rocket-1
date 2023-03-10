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
        <main className="font-body shadow text-center img m-16 p-40 border-8 rounded border-black flex justify-center" style={{ textAlign: "center" }}>
            <form className="bg-gray-200 w-3/5 bg-opacity-50 rounded" onSubmit={handleRegister}>
                <h1 className="font-bold text-4xl mb-4 shadow-lg">create an account</h1>
                <fieldset>
                    
                    <input onChange={updateUser}
                           type="text" id="name" className="form-control"
                           placeholder="your name" required autoFocus />
                </fieldset>
                <fieldset>
                   
                    <input onChange={updateUser}
                        type="text" id="businessName" className="form-control"
                        placeholder="business name" required />
                </fieldset>
                <fieldset>
                   
                    <input onChange={updateUser}
                        type="email" id="email" className="form-control"
                        placeholder="email address" required />
                </fieldset>
                <fieldset>
                   
                    <input onChange={updateUser}
                        type="password" id="password" className="form-control"
                        placeholder="password" required />
                </fieldset>
                <fieldset>
                    <button className="btn m-2" type="submit"> register </button>
                </fieldset>
            </form>
        </main>
    )
}