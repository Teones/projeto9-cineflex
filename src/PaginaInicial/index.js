import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles.css"


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
    const [image, setImage] = useState("");

    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

		requisicao.then(resposta => {
			setImage(resposta.data);
		});
	}, []);
    
    return (
        <div className="lista-de-filmes">
            {image ? (
                image.map(filme => <Filme posterURL={filme.posterURL} id={filme.id}/>)
            ) : "carregando imagens"}
        </div>
    )
}

function Filme ({posterURL, id}) {
    const link = `/sessoes/filme/${id}`
    return (
        <div className="filme">
            <Link to = {link}>
                <img src={posterURL} />
            </Link>
        </div>
    )
}