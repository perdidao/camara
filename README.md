![Mulher utilizando um notebook fazendo alusão ao uso da API](https://dadosabertos.camara.leg.br/img/news/news-ilustration.png "Dados abertos da câmara de deputados")

# Câmara dos deputados

Um projeto de exploração da API aberta da [câmara dos deputados](https://dadosabertos.camara.leg.br/)

A documentação da API encontra-se no [Swagger da câmara](https://dadosabertos.camara.leg.br/swagger/api.html) e lista os endpoints disponíveis.

Para rodar o projeto local, clone esse repositório, navegue até a pasta criada (`camara-react`) e instale as dependências com o comando `yarn install`.
Na sequência, sirva o projeto na porta `3030` com o comando `yarn start`.

## Manutenção de código

Para facilitar o versionamento, esse projeto segue o Gitflow a seguir:
<img src="https://wac-cdn.atlassian.com/dam/jcr:8f00f1a4-ef2d-498a-a2c6-8020bb97902f/03%20Release%20branches.svg?cdnVersion=1671" alt="Bitbucket gitflow" width="540"/>

Atualmente, os commits na branch `main` fazem deploy da aplicação para o [ambiente de produção](https://deputados.vercel.app) e os commits na branch `develop` fazem deploy para o [ambiente de testes/homologação](https://deputados-dev.vercel.app).

Commits diretamente na branch `main` são bloqueados. Para realizar um deploy para produção, a feature/hotfix precisa passar por code review e receber pelo menos uma aprovação antes de ser mergeada via pull request.
