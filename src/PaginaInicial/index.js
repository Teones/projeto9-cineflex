import "./styles.css"

import filmeEnolaHolmes from "../imagens/image3.png"
import filme2067 from "../imagens/image6.png"

export default function PaginaInicial () {
    return (
        <div className="pagina-inicial">
            <Titulo />
            <Filmes />
        </div>
    )
}

function Titulo () {
    return (
        <div className="titulo">
            Selecione o filme
        </div>
    )
}

function Filmes () {
    const filmes = [
        {filme: filmeEnolaHolmes},
        {filme: filme2067},
        {filme: filmeEnolaHolmes},
        {filme: filme2067},
        {filme: filmeEnolaHolmes},
        {filme: filme2067},
        {filme: filmeEnolaHolmes},
        {filme: filme2067},
    ]
    return (
        <div className="lista-de-filmes">
            {filmes.map(cartaz => <Filme filme={cartaz.filme} />)}
        </div>
    )
}

function Filme ({filme}) {
    return (
        <div className="filme">
            <img src={filme} />
        </div>
    )
}