// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente";
import ClienteValidator from "App/Validators/ClienteValidator";

export default class ClientesController {
    index(){
        return Cliente.all()
    }

    show({request}){
        const id = request.param('id')
        return Cliente.findOrFail(id)
    }

    async store({request}){
        const dados = await request.validate(ClienteValidator)

        return Cliente.create(dados)
    }

    async destroy({request}){
        const id = request.param('id')
        const cliente = await Cliente.findOrFail(id)

        return cliente.delete()
    }

    async update ({request}){
        const id = request.param('id')
        const cliente = await Cliente.findOrFail(id)

        const dados = request.only(['nome', 'cpf', 'email', 'telefone', 'datanascimento', 'cep', 'logradouro', 'complemento', 'numero', 'bairro'])

        cliente.merge(dados)

        return cliente.save()
    }

}
