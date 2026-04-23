import { Link } from "react-router-dom";
import "./styles.css"

export default function Sucesso (props) {
    const {data, nomeFilme, sessao, nome, cpf, assentos = []} = props
    
    return (
        <div className="sucesso">
            <Titulo />
            <Informacoes 
                data={data} 
                nomeFilme={nomeFilme} 
                sessao={sessao} 
                nome={nome} 
                cpf={cpf} 
                assentos={assentos} 
            />
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
    const {data, nomeFilme, sessao, nome, cpf, assentos} = props

    return (
        <div className="informacoes">
            <Filme data={data} nomeFilme={nomeFilme} sessao={sessao} />
            <Ingressos assentos={assentos} />
            <Comprador nome={nome} cpf={cpf} />
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

function Ingressos({ assentos }) {
    return(
        <>
            <h1>Ingressos</h1>
            {assentos.map((numero, index) => (
                <p key={index}>Assento {numero}</p>
            ))}
        </>
    )
}

function Comprador ({ nome, cpf }) {
    return (
        <>
            <h1>Comprador</h1> 
            <p>Nome: {nome}</p>
            <p>CPF: {cpf}</p>
        </>
    )
}

function Finalizar () {
    return (
        <Link to="/">
            <div className="botao">
                <button>Voltar pra Home</button>
            </div>
        </Link>
    )
}