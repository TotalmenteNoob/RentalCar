import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 255).notNullable()
      table.integer('cpf').notNullable()
      table.string('matricula', 20)
      table.string('cargo', 60)
      table.date('dataNascimento')
      table.string('email', 100)
      table.string('telefone', 45)
      table.string('salario', 45)
      table.integer('cep')
      table.string('logradouro', 150)
      table.string('complemento', 150)
      table.string('numero', 20)
      table.string('bairro', 100)
      table.integer('locadora_id').unsigned().references('id').inTable('locadoras').notNullable()
      

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
