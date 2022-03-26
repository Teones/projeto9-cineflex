import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import "./styles.css"

export default function Sucesso () {
    return (
        <div className="sucesso">
            <Titulo />
            <Informacoes />
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

function Informacoes () {
    return (
        <div className="informacoes">
            <Filme />
            <Ingressos />
            <Comprador />
        </div>
    )
}

function Filme() {
    return(
        <>
            <h1>Filme e sessão</h1>
            <p>Enola Holmes</p>
            <p>24/06/2021 15:00</p>
        </>
    )
}
function Ingressos() {
    return(
        <>
            <h1>Ingressos</h1>
            <p>Assento 15</p>
            <p>Assento 15</p>
        </>
    )
}
function Comprador () {
    return (
        <>
            <h1>Ingressos</h1>
            <p>Nome: Teones Alex</p>
            <p>CPF: 123.456.789-23</p>
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