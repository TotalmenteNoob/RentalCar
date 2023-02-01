// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario";
import FuncionarioValidator from "App/Validators/FuncionarioValidator";

export default class FuncionariosController {
    index(){
        return Funcionario.all()
    }

    show({request}){
        const id = request.param('id')
        return Funcionario.findOrFail(id)
    }

    async store({request}){
        const dados = await request.validate(FuncionarioValidator)

        return Funcionario.create(dados)
    }

    async destroy({request}){
        const id = request.param('id')
        const funcionario = await Funcionario.findOrFail(id)

        return funcionario.delete()
    }

    async update ({request}){
        const id = request.param('id')
        const funcionario = await Funcionario.findOrFail(id)

        const dados = request.only(['nome', 'cpf', 'matricula', 'cargo', 'datanascimento','email', 'telefone', 'salario','cep', 'logradouro', 'complemento', 'numero', 'bairro', 'locadoraId'])

        funcionario.merge(dados)

        return funcionario.save()
    }

}
