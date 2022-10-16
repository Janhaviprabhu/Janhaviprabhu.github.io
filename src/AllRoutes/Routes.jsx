import {Route, Routes} from "react-router-dom"
import { About } from "../Pages/About"
import { Contact } from "../Pages/Contact"
import { Skills } from "../Pages/Skills"
import { Work } from "../Pages/Work"

export const AllRoutes=()=>{
    return(
        <>
            <Routes>
                <Route path ="/" element={<Work/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/skills" element={<Skills/>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </>
    )
}