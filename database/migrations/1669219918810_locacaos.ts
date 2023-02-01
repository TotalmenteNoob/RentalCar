import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'locacaos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('custo', 20)
      table.date('inicioLocacao')
      table.date('fimLocacao')
      table.integer('carro_id').unsigned().references('id').inTable('carros').notNullable()
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').notNullable()
      table.integer('locadoraInicio_id').unsigned().references('id').inTable('locadoras').notNullable()
      table.integer('locadoraFim_id').unsigned().references('id').inTable('locadoras').notNullable()


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
