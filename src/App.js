import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header.js";
import PaginaInicial from "./PaginaInicial/index.js";
import EscolherSessao from "./EscolherSessao/index.js";
import EscolherAssento from "./EscolherAssento/index.js";


export default function App () {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/sessoes/filme/:id" element={<EscolherSessao />} />
                <Route path="/assentos/:id" element={<EscolherAssento />} />
            </Routes>
        </BrowserRouter>
    )
}