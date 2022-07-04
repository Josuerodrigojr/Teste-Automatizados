// Vou armzaenar todos os steps dpos cenários que vão sustentar nossos testes

// Vamos utilizar o cucumber para os testes automatizados, vamos importar e utilizar o cucumber

// Aqui fica responsável pelo que a gente viu do 'Dado', 'Quando' e 'Então'.
const { Given, When, Then} = require('cucumber');
const {expect} = require('chai');


// ================ Cadastro do usuário ================

Given('que o usuario tenha informado nome: {string}, telefone: {string}, email: {string} e senha:{string}', function (name, telephone, email, password) {
    return this.setToUser(name, telephone, password, email)
  });


When('ele clicar no botão cadastrar', async function () {
  
  return await this.postUser('/user')
});



Then('os dados deverão ser inseridos na base e o retorno deverá ser um json com a informação do usuário que foi cadastrado', function(){
    expect(this.response.name).to.eq("Teste Cucumber")
    expect(this.response.telephone).to.eq("123456789")
    expect(this.response.email).to.eq("teste@bdd.com")
});



// ================ Login do usuário ================


 Given('que eu insira o telefone: {string} e a senha: {string}', function(telephone, password){
   return this.setToLogin(telephone, password)

 })

 When('eu fizer uma requisição de Login', async function(){
  const data = {
    telephone: this.telephone,
    password: this.password
  }
  return await this.post('/user/login', data);

 })

 Then('o retorno deverá ser um json, com as informações do usuário e um token para autenticação', function(){
  expect(this.response.user.name).to.eql('Teste Cucumber');
  expect(this.response.user.telephone).to.eql('123456789');
  // expect(this.response.user.email).to.eql('teste@bdd.com');  
  expect(this.response).to.have.property('token'); 
 })

 // ================ Cadastro do veiculo ================


 Given('que eu autenticado com o telefone: {string} e a senha: {string} informo o modelo: {string} e a placa: {string} e o status: {string}', async function (telephone, password, model, licensePlate, status) {
  // fazendo o login 
  this.setToLogin(telephone, password)

  data ={
    telephone: this.telephone,
    password: this.password
  }
  // Fazendo a requisição de login do usuário 

  await this.post('/user/login', data);
  //Instaciando o veiculo

  return this.setToVehicle(model, licensePlate, status)
  
   
 });

When('eu fizer uma requisição para cadastrar o veículo', async function () {
  // aciono o post de veículo
  const data = {
    model: this.model,
    licensePlate: this.licensePlate,
    status: this.status
  }
  return await this.post('/vehicle', data, true);
});

Then('o retorno deverá ser um json, com as informações do veículo que foram inseridas na base.', function () {
  expect(this.response.model).to.eql('Cruze')
  expect(this.response.licensePlate).to.eql('xpt-0022')
  expect(this.response.status).to.eql('available')
  
});

// ================ Cadastro de corridas ================

Given('que o usuario tenha feito o login informando o telefone: {string} e a senha:{string}, para solcitar uma corrida, irá informar o local de origem: {string}, local de destino: {string}, o modelo do carro: {string}, placa do carro: {string} e o status: {string}', function (telephone, password, startPlace, finishPlace, model, licensePlate, status) {
  this.setToLogin(telephone, password);

  return this.setToRides(startPlace, finishPlace, model,licensePlate,status)

});


When('ele clicar no botão solicitar', async function () {
  const data = {
    telephone: this.telephone,
    vehicle:{
      model:this.model,
      licensePlate: this.licensePlate
    },
    startPlace: this.startPlace,
    finishPlace: this.finishPlace,
    status: 'asked'
  }
  

  return await this.post('/rides', data, true)
});


Then('os dados deverão ser inseridos na base e o retorno deverá ser um json com as informações do usuário, do veiculo, a origem,o destino, id e o status.', function () {
  expect(this.response.user.name).to.eql('Josué Rodrigo');
  expect(this.response.user.telephone).to.eql('77991657191');
  expect(this.response.user.email).to.eql('josuerodrigo.jr80@gmail.co')
  expect(this.response.vehicle.model).to.eql('Celtinha')
  expect(this.response.vehicle.licensePlate).to.eql('IKT4001')
  expect(this.response.startPlace).to.eql('China');
  expect(this.response.finishPlace).to.eql('Bahia');
  // expect(this.response._id).to.eql('62c2641da0ed2ade39926aad');
  expect(this.response.status).to.eql('asked');



});

// ================ Iniciar a corrida ================

Given('que esteja autenticado com o telefone: {string},senha: {string}, status: {string} e o id da corrida: {string}, além disso, informe o tipo: {string}', function (telephone,password,status,id,type) {
  this.setToLogin(telephone,password)


  return this.setToUpdateRide(id,type, status)
});



When('eu clicar em solicitar a corrida', async function () {
 const data={
  type: this.type
 }
  return await this.patch(`/rides/${this.id}`, data);
});



Then('deverá ser alterado na base de dados o status e registrar o inicio da corrida, e retornar um json com as informações do usuário, veículo e a situação da corrida.', function () {
  expect(this.response.status).to.eql('started');
  
});

// ================ Finalizar a corrida ================


Given('que esteja autenticado com o telefone: {string},senha: {string}, que a corrida esteja com o status: {string} e o id da corrida: {string}, além disso, informe o tipo: {string}', function (telephone,password,status,id,type) {
  this.setToLogin(telephone,password)


  return this.setToUpdateRide(id,type, status)
});


When('eu clicar em finalizar a corrida', async function () {
  const data={
    type:this.type,
    status:this.status,
    id: this.id

   }
    return await this.patch(`/rides/${this.id}`, data);
  
});



Then('deverá ser alterado na base de dados o status e registrar a finalização da corrida, e retornar um json com as informações do usuário, veículo e a situação da corrida.', function () {
  expect(this.response.status).to.eql('finished');
});











