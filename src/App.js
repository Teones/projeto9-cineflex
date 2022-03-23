import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header.js";
import PaginaInicial from "./PaginaInicial/index.js";


export default function App () {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
            </Routes>
        </BrowserRouter>
    )
}


// import { Link } from "react-router-dom";
// <Link to="/contato">Contato</Link>