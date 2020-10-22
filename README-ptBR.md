# Feliz

<h4 align="center"> 
	<img src="./client/web/src/images/logo.svg" style="width: 60rem"/>
</h4>
<br />
<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>

## Sobre o projeto

**Feliz** - É um Aplicativo desenvolvido para levar felicidade às crianças de casas sociais, por meio da conexão com pessoas que desejam ajudar. Essa ligação é feita a partir do cadastro das casas sociais, então as pessoas podem entrar em contato com as casas sociais; Tanto por meio do **Mobile App** quanto do **Web App**.

<details>
  <summary>Clique aqui para ver mais informações</summary>
  <section>
    <div>
      Este Projeto foi desenvolvido durante à <b>Next Level Week 3 (NLW)</b> um evento oferecido pela <a href="https://blog.rocketseat.com.br/">RocketSeat</a>. À <b>NLW</b> é um curso intensivo online e gratuito, com muito conteúdo prático e informativo - With a single objective, take you to the next level.
    </div>
    <br />
    <div>
    O conteúdo é exibido durante <b>1 semana</b>, e em cada dia da semana, é apresentado uma etapa para o desenvolvimento do projeto, desde o <b>Back-end</b> até o <b>Front-end Web</b> e <b>Mobile</b>, utilizando as tecnologias: NodeJS + ReactJS + React Native.
    </div>  
  </section>
</details>
<br />
 <div align="center">
  <sub>Agradeço de 💜 à
    <a href="https://github.com/diego3g">Diego Fernandez</a> e toda equipe:
    <a href="https://github.com/rocketseat">Rocketseat</a>:facepunch:
  </sub>
</div>

---


## 🚀 Como executar o projeto

<details>
  <summary>Clique aqui para ver os Pré-requisitos</summary>
  <section>
    <div>
    <h2>Este projeto é divido em três partes:</h2>
    <h4>1 Back-end(pasta server)</h4> 
    <h4>2 Front-end Web (pasta web)</h4>
    <h4>3 Front-end Mobile (pasta mobile)</h4>
    <br />
    <h3>💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.</h3>
    </div>
  </section>
</details>

```bash

# Clone este repositório
$ git clone https://github.com/Felipe-Antoniati/app-happy-nlw3.git

```

#### :minidisc: Iniciar o Servidor (Back-end)

```bash

# Acesse a pasta server do projeto no terminal/powershell
$ cd app-happy-nlw3/server

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:5000 - acesse http://localhost:5000

```

#### 💻 Iniciar Aplicação Web

```bash

# Acesse a pasta Web do projeto no terminal/powershell
$ cd app-happy-nlw3/client/web

# Instale as dependências
$ yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

#### 📱 Iniciar Aplicação Mobile

```bash
Para rodar o projeto mobile você precisa de um celular com o Expo instalado
ou um emulador android/ios.

# # Acesse a pasta Mobile do projeto no terminal/powershell
$ cd app-happy-nlw3/client/mobile

# Instale as depedencias
$ yarn install

# Rode a aplicação
$ yarn start

> Depois leia o QRCode com o app do Expo ou rode em um emulador.

```


---

## ⚙️ Funcionalidades

- [x] As Entidades e Pessoas tem acesso ao **Aplicativo Web**, onde podem: 
  - [x] Procurar por Casas Sociais através de pontos no Mapa
  - [x] Cadastrar Casas Sociais envinando.:
     -[x] Nome, Email.
     -[x] Dados sobre a Casa Social.
     -[x] Instruções de visita.
     -[x] Se abre aos finais de semana ou não.

- [x] As Entidades e Pessoas tem acesso ao **Aplicativo Mobile**, onde podem:
  - [x] Utilizar das mesmas funcionalidades do App Web.

---

## 🛠 Tecnologias

**As seguintes ferramentas foram utilizadas na construção do Projeto:**

<details>
  <summary><b>Server - <a href="https://nodejs.org/en/">NodeJS</a> + <a href="https://www.typescriptlang.org/">Typescript</a></b></summary>
  <section>
    <div style="display: flex; flex-direction: column">
     <a href="https://expressjs.com/">Express</a><br />
      <a href="https://expressjs.com/en/resources/middleware/cors.html">Cors</a><br />
      <a href="https://typeorm.io/">TypeORM</a><br />
      <a href="https://github.com/mapbox/node-sqlite3">SQLite</a><br />
      <a href="https://github.com/TypeStrong/ts-node">ts-node</a><br />
      <a href="https://github.com/jquense/yup">Yup</a><br />
      <a href="https://github.com/expressjs/multer">Multer</a><br />
      <br />
      <sub>
        <h1> Veja o arquivo package.json para mais informações.</h1>
      </sub>
    </div>
  </section>
</details>
<details>
  <summary><b>Web - <a href="https://reactjs.org">React</a> + <a href="https://www.typescriptlang.org/">Typescript</a></b></summary>
  <section>
    <div style="display: flex; flex-direction: column">
      <a href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom">React Router Dom</a><br />
      <a href="https://react-icons.github.io/react-icons/">React Icons</a><br />
      <a href="https://react-leaflet.js.org/en/">Leaflet Js</a><br />
      <a href="https://react-leaflet.js.org/">React Leaflet</a><br />
      <a href="https://github.com/axios/axios">Axios</a>
      <br />
      <sub>
        <h1> Veja o arquivo package.json para mais informações.</h1>
      </sub>
    </div>
  </section>
</details>
<details>
  <summary><b>Mobile - <a href="http://www.reactnative.com/">React Native</a> + <a href="https://www.typescriptlang.org/">Typescript</a></b></summary>
  <section>
    <div style="display: flex; flex-direction: column">
      <a href="https://expo.io/">Expo</a><br />
      <a href="https://docs.expo.io/versions/latest/sdk/constants/">Expo Google Fonts</a><br />
      <a href="https://docs.expo.io/versions/latest/sdk/mail-composer/">Expo Mail Composer</a><br />
      <a href="https://reactnavigation.org/">React Navigation</a><br />
      <a href="https://github.com/react-native-community/react-native-maps">React Native Maps</a><br />
      <a href="https://github.com/axios/axios">Axios</a><br />
      <br />
      <sub>
        <h1> Veja o arquivo package.json para mais informações.</h1>
      </sub>
    </div>
  </section>
</details>

## 💪 Como contribuir para o projeto

1. Faça um **fork** deste projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
   > Em caso de dúvidas, confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 👨‍💻 Dev,s que trabalharam neste Repositório

<a href="https://github.com/felipe-antoniati">
 <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/63480609?s=460&u=c69fe399d6e97159b75b64b597b007ff8e6ac553&v=4" width="100px;" alt="Fullstack Programmer"/>
 <br />
 <sub><b>Felipe Antoniati</b></sub></a> <a href="https://github.com/felipe-antoniati" title="Fullstack Programmer">🚀</a>
 <br />

 [![Linkedin Badge](https://img.shields.io/badge/-Felipe-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/)](https://www.linkedin.com/in/felipe-antoniati-1288041b7/)<br />
[![Gmail Badge](https://img.shields.io/badge/-antoniati.felipe@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:antoniati.felipe@gmail.com)](mailto:antoniati.felipe@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

---

## Versões do README

[Português-BR 🇧🇷](./README-ptBR.md) | [Inglês-EUA 🇺🇸](./README.md)

De uma ⭐️ neste Projeto, para liberar a dopamina!
