import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LocacaoValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    custo: schema.string(),
    inicioLocacao: schema.date.optional({format: 'yyyy-MM-dd HH:mm:ss',}),
    fimLocacao: schema.date.optional({format: 'yyyy-MM-dd HH:mm:ss',}),
    carroId: schema.number([rules.exists({table: 'carros', column: 'id'})]),
    clienteId: schema.number([rules.exists({table: 'clientes', column: 'id'})]),
    locadoraInicioId: schema.number([rules.exists({ table: 'locadoras', column: 'id' })]),
    locadoraFimId: schema.number([rules.exists({ table: 'locadoras', column: 'id' })]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
