# language: pt

Funcionalidade: Iniciar uma corrida
  Como um usuário da aplicação me leva ai 
  Gostaria de inicar uma corrida
  Para que eu possa ir até o meu destino

Cenário: Iniciar uma corrida
  Dado que esteja autenticado com o telefone: '77991657191',senha: 'Teste1', status: 'asken' e o id da corrida: "62c28485e0d5030e97738752", além disso, informe o tipo: 'start'
  Quando eu clicar em solicitar a corrida
  Então deverá ser alterado na base de dados o status e registrar o inicio da corrida, e retornar um json com as informações do usuário, veículo e a situação da corrida.

  