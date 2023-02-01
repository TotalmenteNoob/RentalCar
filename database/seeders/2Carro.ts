import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Carro from 'App/Models/Carro'

export default class extends BaseSeeder {
  public async run () {
    await Carro.createMany([
      {marca: 'chevrolet', modelo: 'onix', quilometragem: 11237, placa: 'LSN7632', ano: 2020, tipocarro: 'hatch', cor: 'branco', potencia: 120},
      {marca: 'chevrolet', modelo: 'equinox', quilometragem: 52352, placa: 'JVP5593', ano: 2021, tipocarro: 'hatch', cor: 'vermelho', potencia: 120},
      {marca: 'chevrolet', modelo: 'cruze', quilometragem: 25252, placa: 'JHW8838', ano: 2022, tipocarro: 'hatch', cor: 'preto', potencia: 120},
      {marca: 'chevrolet', modelo: 'tracker', quilometragem: 36346, placa: 'MBN6650', ano: 2020, tipocarro: 'hatch', cor: 'prata', potencia: 120},
      {marca: 'chevrolet', modelo: 'spin', quilometragem: 56865, placa: 'HQC3290', ano: 2021, tipocarro: 'hatch', cor: 'branco', potencia: 120},
      {marca: 'volkswagen', modelo: 'polo', quilometragem: 23456, placa: 'NAA7885', ano: 2022, tipocarro: 'hatch', cor: 'azul', potencia: 120},
      {marca: 'volkswagen', modelo: 'gol', quilometragem: 64334, placa: 'NEM8498', ano: 2020, tipocarro: 'hatch', cor: 'branco', potencia: 120},
      {marca: 'volkswagen', modelo: 'jetta', quilometragem: 23454, placa: 'HSZ0353', ano: 2021, tipocarro: 'hatch', cor: 'vermelho', potencia: 120},
      {marca: 'volkswagen', modelo: 'nivus', quilometragem: 64545, placa: 'JVT7613', ano: 2022, tipocarro: 'hatch', cor: 'prata', potencia: 120},
      {marca: 'volkswagen', modelo: 't-cross', quilometragem: 77334, placa: 'HVT0612', ano: 2019, tipocarro: 'hatch', cor: 'prata', potencia: 120},
      {marca: 'volkswagen', modelo: 'polo', quilometragem: 96676, placa: 'IRU7649', ano: 2019, tipocarro: 'hatch', cor: 'vinho', potencia: 120},
      {marca: 'renault', modelo: 'duster', quilometragem: 86778, placa: 'NAP0658', ano: 2019, tipocarro: 'hatch', cor: 'branco', potencia: 120},
      {marca: 'renault', modelo: 'sandero', quilometragem: 34555, placa: 'MJY8720', ano: 2022, tipocarro: 'hatch', cor: 'branco', potencia: 120},
      {marca: 'renault', modelo: 'logan', quilometragem: 23443, placa: 'MVF7655', ano: 2021, tipocarro: 'hatch', cor: 'branco', potencia: 120},
    ])
  }
}
