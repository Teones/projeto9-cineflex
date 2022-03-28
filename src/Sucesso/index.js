import { Link } from "react-router-dom";

import "./styles.css"

export default function Sucesso (props) {
    const {data, nomeFilme, sessao} = props
    return (
        <div className="sucesso">
            <Titulo />
            <Informacoes data={data} nomeFilme={nomeFilme} sessao={sessao} />
            <Finalizar />
        </div>
    )
}

function Titulo () {
    return (
        <div className="titulo">
            Pedido feito <br /> com sucesso!
        </div>
    )
}

function Informacoes (props) {
    const {data, nomeFilme, sessao} = props

    return (
        <div className="informacoes">
            <Filme data={data} nomeFilme={nomeFilme} sessao={sessao} />
            <Ingressos />
            <Comprador />
        </div>
    )
}

function Filme(props) {
    const {data, nomeFilme, sessao} = props

    return(
        <>
            <h1>Filme e sessão</h1>
            <p>{nomeFilme}</p>
            <p>{data} {sessao}</p>
        </>
    )
}
function Ingressos() {
    return(
        <>
            <h1>Ingressos</h1>
            <p>Assento </p>
            <p>Assento </p>
        </>
    )
}
function Comprador () {
    return (
        <>
            <h1>Ingressos</h1>
            <p>Nome: </p>
            <p>CPF: </p>
        </>
    )
}

function Finalizar () {
    return (
        <Link to="/">
            <div className="botao">
                <button>Voltar para Home</button>
            </div>
        </Link>
    )
}