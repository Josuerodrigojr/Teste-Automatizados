#language:pt

Funcionalidade: Finalizar uma corrida
  Como um usuário da aplicação me leva ai 
  Gostaria de finalizar uma corrida
  Para mudar o status

Cenário: Finalizar uma corrida
  Dado que esteja autenticado com o telefone: '77991657191',senha: 'Teste1', que a corrida esteja com o status: 'finished' e o id da corrida: "62c28485e0d5030e97738752", além disso, informe o tipo: 'finish'
  Quando eu clicar em finalizar a corrida
  Então deverá ser alterado na base de dados o status e registrar a finalização da corrida, e retornar um json com as informações do usuário, veículo e a situação da corrida.