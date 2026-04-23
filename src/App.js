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
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [assentos, setAssentos] = useState([])

    console.log(nomeFilme, data, sessao, nome)
    
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes>
                <Route path="/" element={<PaginaInicial filme />} />
                <Route path="/sessoes/filme/:id" element={<EscolherSessao />} />
                <Route path="/assentos/:id" element={<EscolherAssento 
                    setNomeFilme={setNomeFilme} 
                    setSessao={setSessao} 
                    setData={setData} 
                    setNome={setNome} 
                    nome={nome}
                    setCpf={setCpf}
                    cpf={cpf}
                    setAssentos={setAssentos}
                    />} />
                <Route path="/sucesso" element={<Sucesso 
                    data={data} 
                    nomeFilme={nomeFilme} 
                    sessao={sessao} 
                    nome={nome} 
                    cpf={cpf} 
                    assentos={assentos} />}/>
            </Routes>
        </BrowserRouter>
    )
}