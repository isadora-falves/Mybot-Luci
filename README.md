# Mybot-Luci


## Intruções Iniciais:
   - Realize o download do projeto **Mybot-Luci** em seu computador
   - Instale o **Node.js** em sua computador versão 15
   - Instale o **npm** em seu computador versão 6.14.10
   - Na pasta do projeto **Mybot** faça:
      ``` npm install --save blip-sdk lime-transport-websocket ```
  
  
 Para que seu **chatbot** seja criado siga as instruções:
  - Acesse o Portal BLiP .
  - Clique no botão Criar chatbot e escolha o modo Criar do zero . Se você já tem seu bot criado basta acessá-los .
  - Após a criação do seu chatbot, clique em Configurações e escolha a opção Informações de conexão no menu à esquerda.
  - Habilite a conexão SDK e obtenha as informações **identifiere e access key**.
 
 
 Configurações dentro do projeto:
   - No arquivo credentials.json informe suas chaves indentifier e acess key para realizar a conexão com a sua conta Blip.
   - Lembramos que as mensagens possuem um destino dentro do projeto, o atributo utilizado é o "to:"
   - Para que as mensagens sejam enviadas para seu chat informe o valor do to correspondente ao seu canal.
  *Blip Chat Node - where '0mn.io' is the Blip Chat domain identifier
  "**df83582a-87b9-45b4-9e76-d4a4a743e2a6**@0mn.io"*
  
  
  Para rodar seu projeto, faça:
  ```node index.js```
   
   
   Para mais informações acesso a documentação do blip:
   [Blip](https://docs.blip.ai/)
