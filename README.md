<h1 align="center">

<img src="https://raw.githubusercontent.com/khalleb/ignews/main/public/images/avatar.svg" alt="rocketshoes" width="100px"/>

</h1>

<p align="center">
  IGNEWS - Portal de notícias 📰🚀
  <br>
  <br>

  <img alt="Language count" src="https://img.shields.io/github/repo-size/danielrgb23/Estudos-em-next"/>

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>

  <a href="https://www.linkedin.com//in/daniel-augusto02/">
    <img alt="Made by Daniel" src="https://img.shields.io/badge/made%20by-danielrgb23-%237519C1">
  </a>

  <a href="https://github.com/danielrgb23/Estudos-em-next/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/danielrgb23/Estudos-em-next">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/danielrgb23/Estudos-em-next">
</p>

---

<p align="center">
  <a href="#dart-sobre">Sobre</a> &#xa0; | &#xa0; 
  <a href="#rocket-tecnologias">Tecnologias</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requerimentos">Requerimentos</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-começando">Começando</a> &#xa0; &#xa0; | &#xa0;
  <a href="#framed_picture-imagens">Imagens</a> &#xa0; &#xa0;
</p>

<br>

## :dart: Sobre ##

O projeto ig.news é um blog onde os usuários podem ter acesso ao conteúdo de cada postagem de acordo com o status de sua assinatura.<br>
O blog possui um sistema de compra integrado com o STRIPE, e após o usuário realizar o pagamento, sua inscrição estará ativa e pronta para visualizar o conteúdo completo
de todo o blog. Caso o usuário não deseje optar pela assinatura, ele terá acesso limitado ao conteúdo das postagens. E todos os dados necessários para se fazer verificações
de assinaturas ou dados dos usuários, estão salvos no banco de dados FaunaDB.
<br>
<br>
Essa é uma aplicação Serverless, ou seja, todo o processo que dependeria de um backend foi integrado dentro do front e seguindo o padrão da JAMStack.
<br>
As postagens são feitas pelo painel do Prismic CMS e integradas diretamente pelo front.


## :rocket: Tecnologias ##

As seguintes tecnologias foram utilizadas no projeto:

- [Next.js](https://nextjs.org/)
- [Prismic CMS](https://prismic.io/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)

## :white_check_mark: Requerimentos ##

- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/)

## :checkered_flag: Começando ##

```bash
# Clone this project
$ git clone https://github.com/danielrgb23/Ignews-blog-studi

# Access
$ cd Ignews-blog-studi

# Install dependencies
$ yarn install

# Run the project
$ yarn dev

# The server will initialize in the <http://localhost:3000>

# Crie um arquivo no diretorio principal
$ .env.local

# Salvar nessa pastas as seguintes informações
$ STRIPE_API_KEY = Por seu respectivo id stripe key (pego no site do stripe)
$ NEXT_PUBLIC_STRIPE_PUBLIC_KEY = Por seu respectivo id stripe public key (pego no site do stripe)
$ STRIPE_SUCCESS_URL = http://localhost:3000/posts
$ STRIPE_CANCEL_URL = http://localhost:3000/
$ STRIPE_WEBHOOK_SECRET = stripe login (ira gerar no terminal o id)

$ PRISMIC_ACESS_TOKEN = id do prismic token
$ PRISMIC_ENDPOINT = exemplo: https://ignews-danielrgb23.cdn.prismic.io/api/v2 (pego no site prismic)

$ FAUNADB_KEY = Por o id do banco de dados fauna

$ GITHUB_CLIENT_ID = Por o id do github client
$ GITHUB_CLIENT_SECRET = Por seu respectivo id
```
## :framed_picture: Imagens ##

<h1 align="center">
    <img alt = "Web app" src="https://raw.githubusercontent.com/khalleb/ignews/main/.github/image-01.png" width = "500px" />
    <img alt = "Web app" src = "https://raw.githubusercontent.com/khalleb/ignews/main/.github/image-02.png" width = "500px" />
    <img alt = "Web app" src = "https://raw.githubusercontent.com/khalleb/ignews/main/.github/image-03.png" width = "500px" />
    <img alt = "Web app" src = "https://raw.githubusercontent.com/khalleb/ignews/main/.github/image-04.png" width = "500px" />
</h1>



