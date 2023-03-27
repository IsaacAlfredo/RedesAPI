# RedesAPI

Link do documento da parte 1 do trabalho: https://docs.google.com/document/d/1lQqPDcBt4_je6EJ4-YOQH1-Mne37h6kS8TeXIsscp84/edit?usp=sharing


Link do vídeo: https://youtu.be/_i3KbJ5qiTI


Link do Dockerhub: https://hub.docker.com/r/isaacalfredo/reqhttp


Instruções:


1- Baixe a imagem do projeto com o executando um dos seguintes comandos:


docker pull isaacalfredo/reqhttp


docker pull isaacalfredo/reqhttp:latest


2- Após isso, crie um container com um dos seguintes comandos, conectando a porta 3000 do container à porta 3000 do seu localhost:


docker run -p 3000:3000 isaacalfredo/reqhttp


docker run -p 3000:3000 isaacalfredo/reqhttp:latest


3- Com o container rodando, basta acessar as seguintes rotas:


Para POST: localhost:3000/users


Para qualquer outra: localhost:3000/user/:id, onde ":id" deve ser substituido por um valor númerico que represente o id de um usuário, que é definido com o tamanho da lista de usuários + 1 no momento de criação do usuário (POST) ou com o id selecionado na URL da requisição (PUT).

