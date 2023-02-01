import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Locacao from './Locacao'

export default class Carro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public marca: string

  @column()
  public modelo: string

  @column()
  public quilometragem: number

  @column()
  public placa: string

  @column()
  public ano: number

  @column()
  public tipocarro: string

  @column()
  public cor: string

  @column()
  public potencia: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=> Locacao)
  public locacao: HasMany<typeof Locacao>

}
