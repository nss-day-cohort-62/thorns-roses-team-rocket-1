import { React, useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { getLogin } from "../ApiManager";


export const Login = () => {
    const [email, set] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        getLogin( email, password )
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("thorns_user", JSON.stringify({
                        id: user.id
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container--login font-body shadow text-center img m-16 p-40 border-8 rounded border-black flex justify-center">
            <section>
                <form className="bg-gray-200 w-full bg-opacity-50 rounded pb-5 pt-2" onSubmit={handleLogin}>
                    <h1 className="font-bold text-4xl font-outline-2 shadow-lg">Thorns and Roses</h1>
                    <div className="text-center p-5">
                    <fieldset className="mb-5">
                        <label htmlFor="inputEmail"> Email address </label>
                        <input className="text-black rounded" type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input className="text-black rounded" type="password"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            placeholder="Password"
                            required autoFocus />
                    </fieldset>
                    </div>
                    <fieldset className="flex row justify-center">
                        <button className="btn mr-4" type="submit">
                            Sign in
                        </button>
                        <button className="link--register ">
                            <Link className= "btn" to="/register">Not a member yet?</Link>
                     </button>
                    </fieldset>
                </form>
            </section>
            
        </main>
    )
}
