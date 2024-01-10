# Rede Social - FrontEnd

Esta é a parte frontend do projeto desenvolvido de uma rede Social. Visando implementar um sistema que permita a criação de usuarios administrativos ou não, que com base em seus respectivos acessos podem criar, alterar ou até mesmo deletar postagens.

## Índice

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Executando o projeto](#executando-o-projeto)
- [Imagens do projeto](#imagens-do-projeto)

## Requisitos

- [x] node - 18.16.0
- [x] npm - 9.5.1
- [x] Prisma - 5.7.1
- [x] Projeto Backend rodando (https://github.com/CamposLeo95/projeto_back_post/tree/main)


## Instalação 

Faça o clone do repositório 

```bash
git clone https://github.com/CamposLeo95/projeto_front_post.git

```

Depois acesse a a pasta atraves do prompt 

```bash
cd projeto_front_post

```
E rode o comando yarn para instalar as dependencias 

```bash
yarn 

```

## Executando o projeto

Para executar o projeto é necessario que você esteja dentro da pasta e utilize o comando yarn dev, isso iniciará o servidor


```bash
yarn dev

```

Logo em seguida o programa irá abrir um servidor http://localhost:5173/ clique e será redirecionado para a pagina de login


## Desafios

- 1º Utilizar o tailwind, fiz o uso dessa lib para a estilização do projeto.

- 2º react-router-dom para a manipulação das rotas variando entre a rota de login em que o usuario irá se cadastrar ou logar e a de users que será apresentado os posts e todas as permissões e dados dos usuarios

- 3º Uso do axios, me ajudou com as configurações das requisições permitindo inserir uma rota padrão de requisição, a inserção do token recuperado do backend nos headers para conseguir acessar as rotas de postes e a manipulação de requisições em geral para acesso aos dados da API 

- Uso do context API para poder manipular o estado global do modal. criando uma forma de abrir e fecha-lo e tambem manipular o componente que apareceria dentro desto, para o caso de editar o post, criar um poste ou editar um usuario.

## Imagens do projeto 

<img width="490px" src="https://github.com/CamposLeo95/next-login/assets/98062615/9ce4b6e3-39ff-414d-9151-6d1b333193ae"/>
<img width="500px" src="https://github.com/CamposLeo95/projeto_idNutrition/assets/98062615/4d70dbef-2651-40f7-8dd4-cabad3ef2d26"/>

---
<img width="800px" src="https://github.com/CamposLeo95/next-login/assets/98062615/23c5fb2b-fa2e-4e54-96e9-331e34ea08c0"/>

---
<img width="800px" src="https://github.com/CamposLeo95/projeto_idNutrition/assets/98062615/64212440-e94c-49fc-b472-c0f191df190c"/>

---
<img width="800px" src="https://github.com/CamposLeo95/projeto_idNutrition/assets/98062615/347f046b-98cf-4772-848c-3e04f78b3b3c"/>

  



