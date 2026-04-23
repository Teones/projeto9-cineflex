<h1 align="center">Cineflex</h1>

![Status_do_Projeto](https://img.shields.io/badge/status-concluded-green)
![Data_de_Criação](https://img.shields.io/badge/create-march_/_2022-blue)
![Última_Atualização](https://img.shields.io/badge/version-april_/_2026-red)

Cineflex é uma aplicação Single Page Application (SPA) para compra de ingressos de cinema. Este projeto consolida o uso de rotas no React, passagem de dados via URL e integração completa com uma API externa (via Axios) para buscar filmes, sessões e enviar pedidos de reserva de assentos.

| <div style="text-align: center;"><img src="./src//assets/iPhone-13-PRO-localhost (3).png" alt="Home - Lista de Filmes" width="150" style="border: none;"/></div> | <div style="text-align: center;"><img src="./src//assets//iPhone-13-PRO-localhost (4).png" alt="Escolha de Sessão" width="150" style="border: none;"/></div> | <div style="text-align: center;"><img src="./src//assets//iPhone-13-PRO-localhost (5).png" alt="Seleção de Assentos" width="150" style="border: none;"/></div> | <div style="text-align: center;"><img src="./src/assets//iPhone-13-PRO-localhost (6).png" alt="Tela de Sucesso" width="150" style="border: none;"/></div> |
|:-:|:-:|:-:|:-:|

## 🔨 Features

- `Feature 1`: **Navegação SPA (React Router DOM)**: Transição fluida entre telas (Catálogo, Horários, Assentos e Sucesso) sem recarregar a página, mantendo o estado da aplicação intacto e utilizando parâmetros de URL (Route Params).
- `Feature 2`: **Integração com API (Axios)**: Consumo dinâmico de dados do servidor via requisições `GET` para renderizar o catálogo de filmes, as sessões disponíveis e a planta de assentos de forma dinâmica.
- `Feature 3`: **Lógica de Seleção de Assentos**: Regras de negócio implementadas no front-end para impedir a seleção de assentos já ocupados e gerenciar a marcação/desmarcação de múltiplos assentos pelo usuário.
- `Feature 4`: **Envio de Dados Complexos (POST)**: Coleta e validação do formulário de comprador (Nome e CPF) combinados com os IDs dos assentos selecionados, enviando a reserva oficial para o servidor via requisição `POST` antes de redirecionar para a tela final.

## 🛠️ Open and run the project

- 📁 O projeto Cineflex é open source e pode ser acessado pelo link: [https://github.com/Teones/projeto9-cineflex](https://github.com/Teones/projeto9-cineflex).
- ▶️ Para rodar o projeto diretamente no navegador, acesse: [https://Teones.github.io/projeto9-cineflex/](https://Teones.github.io/projeto9-cineflex/).

## ✔️ Techniques and technologies used

![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)