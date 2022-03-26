import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import "./styles.css"

export default function EscolherSessao () {
    return (
        <div className="escolher-sessao">
            <Titulo />
            <Sessoes />
            <RodaPe />
        </div>
    )
}

function Titulo () {
    return (
        <div className="titulo">
            Selecione seu horário
        </div>
    )
}

function Sessoes () {
    const { id } = useParams();
    const [sessao, setSessao] = useState("")

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`)

        requisicao.then(resposta => {
            setSessao(resposta.data.days)
        })
    }, []);

    return (
        <div className="sessoes">
            {sessao ? (
                sessao.map(filme => <Sessao weekday={filme.weekday} date={filme.date} showtimes={filme.showtimes} />)
            ) : "carregando sessões"}
        </div>
    )
}

function Sessao(props) {
    const {weekday, date, showtimes} = props

    return (
        <div className="sessao">
            {weekday} - {date}
            <div className="horarios">
                {showtimes.map(horarios => <Horario name={horarios.name} id={horarios.id} />)}
            </div>
        </div>
    )
}

function Horario (props) {
    const {name, id} = props
    const link = `/assentos/${id}`

    return (
        <Link to={link}>
            <div className="horario">
                {name}
            </div>
        </Link>
    )
}


function RodaPe () {
    const { id } = useParams();
    const [sessao, setSessao] = useState("")

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`)

        requisicao.then(resposta => {
            setSessao(resposta.data)
        })
    }, []);

    return (
        <div className="rodape">
            <div className="filme">
                <img src={sessao.posterURL} />
            </div>
            {sessao.title}
        </div>
    )
}