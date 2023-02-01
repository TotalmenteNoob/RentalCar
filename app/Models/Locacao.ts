import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Carro from './Carro'
import Cliente from './Cliente'
import Locadora from './Locadora'

export default class Locacao extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public custo: string

  @column()
  public iniciolocacao: Date

  @column()
  public fimlocacao: Date

  @column()
  public carroId: number

  @column()
  public clienteId: number

  @column()
  public locadorainicioId: number

  @column()
  public locadorafimId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(()=> Carro)
  public carro: BelongsTo<typeof Carro>

  @belongsTo(()=> Cliente)
  public cliente: BelongsTo<typeof Cliente>

  @belongsTo(()=> Locadora)
  public locadoraInicio: BelongsTo<typeof Locadora>

  @belongsTo(()=> Locadora)
  public locadoraFim: BelongsTo<typeof Locadora>

}
