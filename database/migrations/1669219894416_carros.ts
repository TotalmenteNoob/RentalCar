import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'carros'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('marca', 45).notNullable()
      table.string('modelo', 45).notNullable()
      table.integer('quilometragem').notNullable()
      table.string('placa', 20).notNullable()
      table.integer('ano')
      table.string('tipoCarro', 45)
      table.string('cor', 45)
      table.integer('potencia')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
