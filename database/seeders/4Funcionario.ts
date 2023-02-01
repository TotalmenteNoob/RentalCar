import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {nome: 'Francisco', cpf: 57774246002, matricula: '11111', cargo: 'gerente', datanascimento: new Date('25-07-2001'), email: 'francisco@gmail.com', telefone: '000000000', salario: '4000', cep: 4412, logradouro: 'logradouro', complemento: 'complemento', numero: '25', bairro: 'Ceilândia', locadoraId: 5},
      {nome: 'Mario', cpf: 15443091042, matricula: '22222', cargo: 'atendente', datanascimento: new Date('25-07-2001'), email: 'francisco@gmail.com', telefone: '000000000', salario: '4000', cep: 4412, logradouro: 'logradouro', complemento: 'complemento', numero: '25', bairro: 'Ceilândia', locadoraId: 1},
      {nome: 'Ana', cpf: 77096086048, matricula: '33333', cargo: 'atendente', datanascimento: new Date('25-07-2001'), email: 'francisco@gmail.com', telefone: '000000000', salario: '4000', cep: 4412, logradouro: 'logradouro', complemento: 'complemento', numero: '25', bairro: 'Ceilândia', locadoraId: 2},
      {nome: 'Carla', cpf: 43565871032, matricula: '44444', cargo: 'atendente', datanascimento: new Date('25-07-2001'), email: 'francisco@gmail.com', telefone: '000000000', salario: '4000', cep: 4412, logradouro: 'logradouro', complemento: 'complemento', numero: '25', bairro: 'Ceilândia', locadoraId: 2},
      {nome: 'Maria', cpf: 40628227094, matricula: '55555', cargo: 'atendente', datanascimento: new Date('25-07-2001'), email: 'francisco@gmail.com', telefone: '000000000', salario: '4000', cep: 4412, logradouro: 'logradouro', complemento: 'complemento', numero: '25', bairro: 'Ceilândia', locadoraId: 3},
      {nome: 'Pedro', cpf: 76233956021, matricula: '66666', cargo: 'atendente', datanascimento: new Date('25-07-2001'), email: 'francisco@gmail.com', telefone: '000000000', salario: '4000', cep: 4412, logradouro: 'logradouro', complemento: 'complemento', numero: '25', bairro: 'Ceilândia', locadoraId: 4},
      {nome: 'Francisca', cpf: 38422981025, matricula: '77777', cargo: 'gerente', datanascimento: new Date('25-07-2001'), email: 'francisco@gmail.com', telefone: '000000000', salario: '4000', cep: 4412, logradouro: 'logradouro', complemento: 'complemento', numero: '25', bairro: 'Ceilândia', locadoraId: 5},
      {nome: 'Josefina', cpf: 97529645080, matricula: '10101', cargo: 'atendente', datanascimento: new Date('25-07-2001'), email: 'francisco@gmail.com', telefone: '000000000', salario: '4000', cep: 4412, logradouro: 'logradouro', complemento: 'complemento', numero: '25', bairro: 'Ceilândia', locadoraId: 5},
      {nome: 'Bianca', cpf: 83758862035, matricula: '11110', cargo: 'gerente', datanascimento: new Date('25-07-2001'), email: 'francisco@gmail.com', telefone: '000000000', salario: '4000', cep: 4412, logradouro: 'logradouro', complemento: 'complemento', numero: '25', bairro: 'Ceilândia', locadoraId: 4},
      {nome: 'Augusto', cpf: 70618799044, matricula: '12121', cargo: 'atendente', datanascimento: new Date('25-07-2001'), email: 'francisco@gmail.com', telefone: '000000000', salario: '4000', cep: 4412, logradouro: 'logradouro', complemento: 'complemento', numero: '25', bairro: 'Ceilândia', locadoraId: 1},
      {nome: 'Victor', cpf: 28028259090, matricula: '77777', cargo: 'gerente', datanascimento: new Date('25-07-2001'), email: 'francisco@gmail.com', telefone: '000000000', salario: '4000', cep: 4412, logradouro: 'logradouro', complemento: 'complemento', numero: '25', bairro: 'Ceilândia', locadoraId: 5},
      {nome: 'Gustavo', cpf: 72102566056, matricula: '99999', cargo: 'atendente', datanascimento: new Date('25-07-2001'), email: 'francisco@gmail.com', telefone: '000000000', salario: '4000', cep: 4412, logradouro: 'logradouro', complemento: 'complemento', numero: '25', bairro: 'Ceilândia', locadoraId: 1},
    ])
  }
}
