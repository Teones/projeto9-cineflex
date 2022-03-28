import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import "./styles.css"

export default function EscolherAssento (props) {
    const {setNomeFilme, setSessao, setData, setNome, nome} = props
    return (
        <div className="escolher-assento">
            <Titulo />
            <Assentos />
            <Dados setNome={setNome} nome={nome}/>
            <Botao />
            <Footer setNomeFilme={setNomeFilme} setSessao={setSessao} setData={setData} />
        </div>
    )
}

function Titulo () {
    return (
        <div className="titulo">
            Selecione o(s) assento(s)
        </div>
    )
}

function Assentos () {
    const { id } = useParams();
    const [assentos, setAssentos] = useState("")

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`)

        requisicao.then(resposta => {
            setAssentos(resposta.data.seats)
        })
    }, []);

    return (
        <div className="assentos">
            {assentos ? (
                assentos.map(cadeira => <Cadeira numero={cadeira.name} disponivel={cadeira.isAvailable}/>)
            ) : "carregando assentos"}
            <Legenda />
        </div>
    )
}

function Cadeira (props) {
    let {numero, disponivel} = props
    let [selecionavel, setSelecionavel] = useState(disponivel)
    let css = ""
    selecionavel ? (css = `cadeira true`) : (css = `cadeira selecionado`)
    

    return (
        <>
            {disponivel ?
                <div className={css} onClick={() => setSelecionavel(!selecionavel)}>
                    {numero}
                </div>
                :
                <div className="cadeira false" onClick={() => alert("Esse assento não está disponível")}>
                    {numero}
                </div>
                }
        </>
    )
}

function Legenda () {
    return (
        <div className="legenda">
            <div className="opcao">
                <div className="cadeira selecionado"></div>
                Selecionado
            </div>
            <div className="opcao">
                <div className="cadeira true"></div>
                disponível
            </div>
            <div className="opcao">
                <div className="cadeira false"></div>
                Indisponível
            </div>
        </div>
    )
}

function Dados (props) {
    const {setNome, nome} = props

    return (
        <div className="dados" value={nome} onBlur={e => setNome(e.target.value)}>
            Nome do comprador:
            <input type="text" placeholder="Digite seu nome..."/>
            CPF do comprador:
            <input type="text" placeholder="Digite seu CPF..."/>
        </div>
    )
}

function Botao () {
    return (
        <Link to="/sucesso">
            <div className="botao">
                <button>Reservar assento(s)</button>
            </div>
        </Link>
    )
}

function Footer (props) {
    const { id } = useParams();
    const [filme, setFilme] = useState("")
    const [dia, setDia] = useState("")
    const [horario, setHorario] = useState("")
    const {setNomeFilme, setSessao, setData} = props
    
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`)
        
        requisicao.then(resposta => {
            setFilme(resposta.data.movie)
            setDia(resposta.data.day)
            setHorario(resposta.data.name)
            setNomeFilme(resposta.data.movie.title)
            setSessao(resposta.data.name)
            setData(resposta.data.day.date)
        })
    }, []);
    

    return (
        <div className="footer">
            <div className="imagem">
                <img src={filme.posterURL} />
            </div>
            <div className="informacoes">
                <div>{filme.title}</div>
                <div>{dia.weekday} - {horario}</div> 
            </div>
        </div>
    )
}