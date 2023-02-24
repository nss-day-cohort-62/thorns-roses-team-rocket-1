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
        <main className="container--login font-body text-white shadow text-center img p-20">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1 className="font-bold text-5xl p-5 font-outline-2">Thorns and Roses</h1>
                    <div className="text-left p-5">
                    <fieldset className="mb-5">
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input type="password"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            className="form-control"
                            placeholder="Password"
                            required autoFocus />
                    </fieldset>
                    </div>
                    <fieldset>
                        <button className="btn" type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register ">
                <Link className= "border-b border-blue-500 text-blue-500" to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}
