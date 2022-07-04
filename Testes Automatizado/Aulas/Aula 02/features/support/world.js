// Todos os arquivos que vão sustentar os nossos testes

// Para que eu tenha um construtor universal que possa armazenar todos os meus teste, responsavel para armaxzenar todas as classes construtoras

const {setWorldConstructor} = require('cucumber');

const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:3001/api/'
})

class CustomWorld {
    constructor(){
        //User
        this.name = ''
        this.telephone = ''
        this.email = ''
        this.password = ''

        //Vehicle
        
        this.model = '';
        this.licensePlate = '';
        this.status = '';


        //Rides
        this.startPlace = ''
        this.finishPlace = '';
        this.type = '';
        this.id = '';

        //Aux
        this.response = '';
        this.token = '';
    }
        //Funções auxiliares

        //A função auxiliar abaixo, é para representar os parametros que vou receber e armazenar

        setToUser(name, telephone,password, email){
            this.name = name;
            this.telephone = telephone;
            this.password = password;
            this.email = email
            

        }

        setToLogin(telephone, password){
            this.telephone = telephone,
            this.password = password;
        }

        setToVehicle(model, licensePlate, status){
            this.model = model;
            this.licensePlate = licensePlate;
            this.status = status
        }

        setToRides(startPlace, finishPlace, model,licensePlate, status){
            this.startPlace = startPlace;
            this.finishPlace = finishPlace
            this.model = model
            this.licensePlate = licensePlate
            this.status = status

        }

        setToUpdateRide(id,type,status){
            this.id= id;
            this.type = type
            this.status = status
        }

        async post(path, data, isAutenticated = false){
            let response;
            
            if(isAutenticated){
                const headers = {
                    'x-access-token': this.token
                }

                response = await api.post(path, data, {headers:headers});

            this.response = response.data


            } else {
                response = await api.post(path,data)
                if(response.data.token){
                    this.token = response.data.token

                }
                this.response = response.data
            }

            if(this.type==='start'){
                console.log("Foi aqui")
            }

            
            


        }

        async patch(path, data){
            let response
            response = await api.patch(path, data);
            this.response = response.data   
        }





        

    }

    setWorldConstructor(CustomWorld)
