import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Importamos useNavigate!

import "./styles.css"

export default function EscolherAssento (props) {
    const {setNomeFilme, setSessao, setData, setNome, setCpf, setAssentos, nome, cpf} = props
    
    const [idsSelecionados, setIdsSelecionados] = useState([])
    const [numerosSelecionados, setNumerosSelecionados] = useState([])
    
    const navigate = useNavigate();

    function selecionarAssento(id, numero, estaSelecionado) {
        if (estaSelecionado) {
            setIdsSelecionados(idsSelecionados.filter(item => item !== id))
            setNumerosSelecionados(numerosSelecionados.filter(item => item !== numero))
        } else {
            setIdsSelecionados([...idsSelecionados, id])
            setNumerosSelecionados([...numerosSelecionados, numero])
        }
    }

    function reservar(e) {
        e.preventDefault();

        if (idsSelecionados.length === 0) {
            alert("Selecione pelo menos um assento!");
            return;
        }
        if (!nome || !cpf) {
            alert("Preencha nome e CPF!");
            return;
        }

        const body = {
            ids: idsSelecionados,
            name: nome,
            cpf: cpf
        }

        axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", body)
            .then(() => {
                setAssentos(numerosSelecionados);
                navigate("/sucesso");
            })
            .catch(erro => {
                alert("Erro ao fazer a reserva. Tente novamente.");
            });
    }

    return (
        <div className="escolher-assento">
            <Titulo />
            <Assentos selecionarAssento={selecionarAssento} idsSelecionados={idsSelecionados} />
            <Dados setNome={setNome} setCpf={setCpf} nome={nome} cpf={cpf} />
            <Botao reservar={reservar} />
            <Footer setNomeFilme={setNomeFilme} setSessao={setSessao} setData={setData} />
        </div>
    )
}

function Titulo () {
    return <div className="titulo">Selecione o(s) assento(s)</div>
}

function Assentos ({ selecionarAssento, idsSelecionados }) {
    const { id } = useParams();
    const [assentos, setAssentos] = useState(null)

    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`)
        requisicao.then(resposta => {
            setAssentos(resposta.data.seats)
        })
    }, [id]);

    return (
        <div className="assentos">
            {assentos !== null ? (
                assentos.map(cadeira => (
                    <Cadeira 
                        key={cadeira.id} 
                        id={cadeira.id}
                        numero={cadeira.name} 
                        disponivel={cadeira.isAvailable}
                        selecionarAssento={selecionarAssento}
                        selecionado={idsSelecionados.includes(cadeira.id)} 
                    />
                ))
            ) : "Carregando assentos..."}
            <Legenda />
        </div>
    )
}

function Cadeira ({ id, numero, disponivel, selecionado, selecionarAssento }) {
    let css = "cadeira "
    if (!disponivel) {
        css += "false"
    } else if (selecionado) {
        css += "selecionado"
    } else {
        css += "true"
    }

    function aoClicar() {
        if (!disponivel) {
            alert("Esse assento não está disponível");
        } else {
            selecionarAssento(id, numero, selecionado);
        }
    }

    return (
        <div className={css} onClick={aoClicar}>
            {numero}
        </div>
    )
}

function Legenda () {
    return (
        <div className="legenda">
            <div className="opcao"><div className="cadeira selecionado"></div>Selecionado</div>
            <div className="opcao"><div className="cadeira true"></div>Disponível</div>
            <div className="opcao"><div className="cadeira false"></div>Indisponível</div>
        </div>
    )
}

function Dados ({ setNome, setCpf, nome, cpf }) {
    return (
        <div className="dados">
            Nome do comprador:
            <input type="text" placeholder="Digite seu nome..." value={nome} onChange={e => setNome(e.target.value)} />
            CPF do comprador:
            <input type="text" placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpf(e.target.value)} />
        </div>
    )
}

function Botao ({ reservar }) {
    return (
        <div className="botao">
            <button onClick={reservar}>Reservar assento(s)</button>
        </div>
    )
}

function Footer ({ setNomeFilme, setSessao, setData }) {
    const { id } = useParams();
    const [filme, setFilme] = useState("")
    const [dia, setDia] = useState("")
    const [horario, setHorario] = useState("")
    
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
    }, [id, setNomeFilme, setSessao, setData]);
    
    return (
        <div className="footer">
            <div className="imagem">
                {filme.posterURL && <img src={filme.posterURL} alt={filme.title} />}
            </div>
            <div className="informacoes">
                <div>{filme.title}</div>
                <div>{dia.weekday} - {horario}</div> 
            </div>
        </div>
    )
}