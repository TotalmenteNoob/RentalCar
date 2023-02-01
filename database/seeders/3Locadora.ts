import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Locadora from 'App/Models/Locadora'

export default class extends BaseSeeder {
  public async run () {
    await Locadora.createMany([
      {email: 'rentalCar1@rentalcar.com.br', telefone: '6535410324', cep: 95096270, logradouro: 'Rua João Manoel Vianna', numero: '5', bairro: 'kayser'},
      {email: 'rentalCar2@rentalcar.com.br', telefone: '6535410324', cep: 29056915, logradouro: 'Rua Capitão Domingos Corrêa da Rocha', numero: '80', bairro: 'Santa Lúcia'},
      {email: 'rentalCar3@rentalcar.com.br', telefone: '6535410324', cep: 68909814, logradouro: 'Aveniva Ana Maria Das Graças Picanço', numero: '24', bairro: 'Novo Horizonte'},
      {email: 'rentalCar4@rentalcar.com.br', telefone: '6535410324', cep: 12280105, logradouro: 'Rua Dona Mariquinha Lara', numero: '124', bairro: 'Jardim São José'},
      {email: 'rentalCar5@rentalcar.com.br', telefone: '6535410324', cep: 72155206, logradouro: 'Quadra QNL 2 Conjunto F', numero: '341', bairro: 'Taguatinga Norte'},
      {email: 'rentalCar6@rentalcar.com.br', telefone: '6535410324', cep: 70252500, logradouro: 'Quadra CLS 206', numero: '206', bairro: 'Asa Sul'},
    ])
  }
}
