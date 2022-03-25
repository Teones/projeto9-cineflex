import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import EnolaHolmes from "../imagens/image6.png"
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
            setSessao(resposta.data)
            console.log(resposta.data)
        })
    }, []);

    return (
        <div className="sessoes">
            <div className="sessao">
                Quinta-feira - 2021
                <div className="horarios">
                    <div className="horario">
                        <Link to = "/assentos/:idSessao">
                            15:00
                        </Link>
                    </div>
                    <div className="horario">
                    <Link to = "/assentos/:idSessao">
                        19:00
                    </Link>
                    </div>    
                </div>
            </div>
            <div className="sessao">
                Quinta-feira - 2021
                <div className="horarios">
                    <div className="horario">
                        <Link to = "/assentos/:idSessao">
                            15:00
                        </Link>
                    </div>
                    <div className="horario">
                        <Link to = "/assentos/:idSessao">
                            19:00
                        </Link>
                    </div>    
                </div>
            </div>
        </div>
    )
}

function RodaPe () {
    return (
        <div className="rodape">
            <div className="filme">
                <img src={EnolaHolmes} />
            </div>
            Enola Holmes
        </div>
    )
}