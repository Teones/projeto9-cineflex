import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./Header/index.js";
import PaginaInicial from "./PaginaInicial/index.js";
import EscolherSessao from "./EscolherSessao/index.js";
import EscolherAssento from "./EscolherAssento/index.js";
import Sucesso from "./Sucesso/index.js";


export default function App () {
    const [nomeFilme, setNomeFilme] = useState("")
    const [data, setData] = useState("")
    const [sessao, setSessao] = useState("")
    // const [cadeira, setCadeira] = useState()
    const [nome, setNone] = useState("")

    console.log(nomeFilme, data, sessao, nome)
    
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<PaginaInicial filme   />} />
                <Route path="/sessoes/filme/:id" element={<EscolherSessao />} />
                <Route path="/assentos/:id" element={<EscolherAssento 
                    setNomeFilme={setNomeFilme} setSessao={setSessao} setData={setData} setNone={setNone} nome={nome}/>} />
                <Route path="/sucesso" element={<Sucesso data={data} nomeFilme={nomeFilme} sessao={sessao} />}/>
            </Routes>
        </BrowserRouter>
    )
}