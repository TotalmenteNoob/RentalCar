import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Locacao from 'App/Models/Locacao'

export default class extends BaseSeeder {
  public async run () {
    await Locacao.createMany([
      {custo: '500', iniciolocacao: new Date('25-07-2022'), fimlocacao: new Date('25-08-2022'), carroId: 1, clienteId: 1, locadorainicioId: 1, locadorafimId: 4},
      {custo: '500', iniciolocacao: new Date('25-07-2022'), fimlocacao: new Date('25-08-2022'), carroId: 2, clienteId: 2, locadorainicioId: 3, locadorafimId: 1},
      {custo: '500', iniciolocacao: new Date('25-07-2022'), fimlocacao: new Date('25-08-2022'), carroId: 3, clienteId: 3, locadorainicioId: 2, locadorafimId: 3},
      {custo: '500', iniciolocacao: new Date('25-07-2022'), fimlocacao: new Date('25-08-2022'), carroId: 4, clienteId: 4, locadorainicioId: 1, locadorafimId: 1},
      {custo: '500', iniciolocacao: new Date('25-07-2022'), fimlocacao: new Date('25-08-2022'), carroId: 5, clienteId: 5, locadorainicioId: 5, locadorafimId: 4},
      {custo: '500', iniciolocacao: new Date('25-07-2022'), fimlocacao: new Date('25-08-2022'), carroId: 6, clienteId: 6, locadorainicioId: 5, locadorafimId: 2},
      {custo: '500', iniciolocacao: new Date('25-07-2022'), fimlocacao: new Date('25-08-2022'), carroId: 7, clienteId: 7, locadorainicioId: 1, locadorafimId: 2},
      {custo: '500', iniciolocacao: new Date('25-07-2022'), fimlocacao: new Date('25-08-2022'), carroId: 8, clienteId: 8, locadorainicioId: 3, locadorafimId: 3},
      {custo: '500', iniciolocacao: new Date('25-07-2022'), fimlocacao: new Date('25-08-2022'), carroId: 9, clienteId: 9, locadorainicioId: 3, locadorafimId: 5},
      {custo: '500', iniciolocacao: new Date('25-07-2022'), fimlocacao: new Date('25-08-2022'), carroId: 10, clienteId: 10, locadorainicioId: 2, locadorafimId: 5},
      {custo: '500', iniciolocacao: new Date('25-07-2022'), fimlocacao: new Date('25-08-2022'), carroId: 11, clienteId: 11, locadorainicioId: 1, locadorafimId: 1},
    ])
  }
}
