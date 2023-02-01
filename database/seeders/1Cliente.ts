import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {nome: 'Victor Gabriel', cpf: 11111111111 , email: 'vgvg@outlook.com', telefone: '61982942567', datanascimento: new Date('25-07-2001'), cep: 72220120, logradouro: 'QNN 2', complemento: 'lote 36', numero: '36', bairro: 'Ceilândia Sul'},
      {nome: 'Pedro Augusto', cpf: 22222222222 , email: 'papa@hotmail.com', telefone: '61996734567', datanascimento: new Date('22-11-1999'), cep: 72220120, logradouro: 'QNN 2', complemento: 'lote 36', numero: '36', bairro: 'Ceilândia Sul'},
      {nome: 'Maria Joaquina', cpf: 33333333333 , email: 'mjmj@outlook.com', telefone: '61992934667', datanascimento: new Date('28-12-1977'), cep: 72220120, logradouro: 'QNN 2', complemento: 'lote 36', numero: '36', bairro: 'Ceilândia Sul'},
      {nome: 'Vin Diesel', cpf: 4444444444 , email: 'vdvd@yahoo.com', telefone: '61992934557', datanascimento: new Date('01-06-1965'), cep: 72220120, logradouro: 'QNN 2', complemento: 'lote 36', numero: '36', bairro: 'Ceilândia Sul'},
      {nome: 'Ana Maria', cpf: 55555555555 , email: 'anan@gmail.com', telefone: '61972922567', datanascimento: new Date('08-07-1978'), cep: 72220120, logradouro: 'QNN 2', complemento: 'lote 36', numero: '36', bairro: 'Ceilândia Sul'},
      {nome: 'Carlos Fernando', cpf: 66666666666 , email: 'cfcf@gmail.com', telefone: '61997834567', datanascimento: new Date('11-08-1988'), cep: 72220120, logradouro: 'QNN 2', complemento: 'lote 36', numero: '36', bairro: 'Ceilândia Sul'},
      {nome: 'Welligton Silva', cpf: 77777777777 , email: 'wsws@outlook.com', telefone: '61992934599', datanascimento: new Date('28-02-1985'), cep: 72220120, logradouro: 'QNN 2', complemento: 'lote 36', numero: '36', bairro: 'Ceilândia Sul'},
      {nome: 'Luana Pereira', cpf: 88888888888 , email: 'lplp@gmail.com', telefone: '61992934511', datanascimento: new Date('30-01-2000'), cep: 72220120, logradouro: 'QNN 2', complemento: 'lote 36', numero: '36', bairro: 'Ceilândia Sul'},
      {nome: 'Karolina Rossi', cpf: 99999999999 , email: 'krkr@outlook.com', telefone: '61972934567', datanascimento: new Date('11-12-1992'), cep: 72220120, logradouro: 'QNN 2', complemento: 'lote 36', numero: '36', bairro: 'Ceilândia Sul'},
      {nome: 'José Viana', cpf: 10101010101 , email: 'jvjv@outlook.com', telefone: '61974934567', datanascimento: new Date('07-09-1994'), cep: 72220120, logradouro: 'QNN 2', complemento: 'lote 36', numero: '36', bairro: 'Ceilândia Sul'},
      {nome: 'Felipe Alves', cpf: 12121212121 , email: 'fafa@hotmail.com', telefone: '61986934567', datanascimento: new Date('02-11-1955'), cep: 72220120, logradouro: 'QNN 2', complemento: 'lote 36', numero: '36', bairro: 'Ceilândia Sul'},
    ])
  }
}
