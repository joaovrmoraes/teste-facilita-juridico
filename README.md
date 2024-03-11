# Teste Facilita Jurídico

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)
- ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) 
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
- ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) 
- ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white) 
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) 
- ![Radix UI](https://img.shields.io/badge/radix%20ui-161618.svg?style=for-the-badge&logo=radix-ui&logoColor=white)

Este projeto requer Docker, Node.js e um arquivo .env configurado para funcionar corretamente.

## Configuração Inicial

1. **Docker**: Certifique-se de ter o Docker instalado em sua máquina. Se não, você pode baixá-lo [aqui](https://www.docker.com/products/docker-desktop).
2. **.env**: Copie o arquivo `.env.example` e renomeie para `.env`. Preencha as variáveis de ambiente conforme necessário.
3. **Dependências**: Entre na pasta `server` e instale as dependências com `npm install`.

### Rodando o Projeto

1. **Docker Compose**: Na pasta raiz do projeto, execute o comando `docker-compose up` para iniciar os serviços do Docker.
2. **Servidor**: Na pasta `server`, execute o comando `npm run start:dev` para iniciar o servidor.
3. **.env.local**: Copie o arquivo `.env.local.example` na pasta `web` e renomeie para `.env.local`. Preencha as variáveis de ambiente conforme necessário.
4. **Web**: Na pasta `web`, execute o comando `npm run dev` para iniciar o aplicativo web.

Agora você deve ser capaz de acessar o aplicativo em `localhost:porta`, onde `porta` é a porta especificada no seu arquivo `.env`.
