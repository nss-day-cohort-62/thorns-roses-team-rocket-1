
import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { ApplicationViews } from "./components/views/ApplicationViews"
import { ThornsAndRoses } from "./App"


const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <ThornsAndRoses/>
    </BrowserRouter>
)

