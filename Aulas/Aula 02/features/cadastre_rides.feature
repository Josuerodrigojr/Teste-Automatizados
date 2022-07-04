# language: pt

Funcionalidade: Cadastrar corrida
  Eu como interessado no app Me Leva Ai
  Gostaria de cadastrar uma corrida
  Para que eu possa me locomover

  Cenário: Usuário informa os dados para cadastro de corrida
    Dado que o usuario tenha feito o login informando o telefone: '77991657191' e a senha:'Teste1', para solcitar uma corrida, irá informar o local de origem: 'China', local de destino: 'Bahia', o modelo do carro: 'Celtinha', placa do carro: 'IKT4001' e o status: 'asked' 
    Quando ele clicar no botão solicitar
    Então os dados deverão ser inseridos na base e o retorno deverá ser um json com as informações do usuário, do veiculo, a origem,o destino, id e o status. 