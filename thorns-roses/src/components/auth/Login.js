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
           <h1 className="font-bold text-white p-10 text-8xl font-outline-2 shadow-lg">Thorns and Roses</h1>
            <section>
                <form className="bg-gray-200 w-full bg-opacity-50 rounded pb-5 pt-2" onSubmit={handleLogin}>
                    <div className="text-center p-5">
                    <fieldset className="mb-5">
                        
                        <input className="text-black rounded" type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            placeholder="email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        
                        <input className="text-black rounded" type="password"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            placeholder="password"
                            required autoFocus />
                    </fieldset>
                    </div>
                    <fieldset className="flex row justify-center">
                        <button className="btn mr-4 transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300" type="submit">
                            sign in
                        </button>
                        <button className="link--register transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300 ">
                            <Link className= "btn " to="/register">sign up</Link>
                     </button>
                    </fieldset>
                </form>
            </section>
            
        </main>
    )
}
