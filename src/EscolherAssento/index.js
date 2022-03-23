import EnolaHolmes from "../imagens/image6.png"
import "./styles.css"

export default function EscolherAssento () {
    return (
        <div className="escolher-assento">
            <Titulo />
            <Assentos />
            <Dados />
            <Botao />
            <Footer />
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
    let cinema = []
    for (let i = 0; i < 50; i++) {
        cinema.push({numero: i, disponivel: true})
    }

    return (
        <div className="assentos">
            {cinema.map(cadeira => <Cadeira numero={cadeira.numero} disponivel={cadeira.disponivel} />)}
            <Legenda />
        </div>
    )
}

function Cadeira (props) {
    let {numero, disponivel} = props
    let css = `cadeira ${disponivel}`
    return (
        <div className={css}>
            {numero}
        </div>
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

function Dados () {
    return (
        <div className="dados">
            Nome do comprador:
            <input type="text" placeholder="Digite seu nome..."/>
            CPF do comprador:
            <input type="text" placeholder="Digite seu nome..."/>
        </div>
    )
}

function Botao () {
    return (
        <div className="botao">
            <button>Reservar assento(s)</button>
        </div>
    )
}

function Footer () {
    return (
        <div className="footer">
            <div className="imagem">
                <img src={EnolaHolmes} />
            </div>
            <div className="informacoes">
                <div>Enola Holmes</div>
                <div>Quinta-feira - 15:00</div>
            </div>
        </div>
    )
}