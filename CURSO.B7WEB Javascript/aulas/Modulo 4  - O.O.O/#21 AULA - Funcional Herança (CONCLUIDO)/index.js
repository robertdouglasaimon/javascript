/* Programação Funcional: Herança*/

// Cria um objeto modelo (nesse exemplo é o defaultUser) e podemos usar ele para criar novos usuários e puxar para esses novos usuarios as propriedades do defaultUser. Segue abaixo o exemplo:

let defaultUser = {
  name: '',
  sobrenome:'',
  idade:'',
  email:'robertdouglasaimon@gmail.com',
  level: 1
}

let user1 = {
  ...defaultUser,
  name:'Érika',
  email: 'erikawanessa@gmail.com'
}

let adm1 = {
  ...defaultUser,
  name: 'Admin da zoeira',
  email: 'admcabuloso@gmail.com',
  tel: 1516165464,
  level: 2
}

console.log(adm1);

//Observação: Sempre que for criado uma propriedade igual a propriedade do objeto no qual eu to acessando para herdar os dados, essa propriedade criada vai SUBISTITUIR os dados que vieram de herança do objeto principal, pelos dados que eu colocarei no novo usuario (Como acontece ali no exemplo do "user1"). E também, sempre que criar um novo objeto, herdar os dados.. E por acaso, se nesses dados herdados o campo do principal estiver VAZIO, e o do NOVO OBJETO tiver alguma informação.. O novo objeto vai criar uma "local" dentro das propriedades herdadas para colocar o que foi criado (Assim como mostra no exemplo "adm1").