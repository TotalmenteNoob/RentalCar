// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Locadora from "App/Models/Locadora";
import LocadoraValidator from "App/Validators/LocadoraValidator";

export default class LocadorasController {
    index(){
        return Locadora.all()
    }

    show({request}){
        const id = request.param('id')
        return Locadora.findOrFail(id)
    }

    async store({request}){
        const dados = await request.validate(LocadoraValidator)

        return Locadora.create(dados)
    }

    async destroy({request}){
        const id = request.param('id')
        const locadora = await Locadora.findOrFail(id)

        return locadora.delete()
    }

    async update ({request}){
        const id = request.param('id')
        const locadora = await Locadora.findOrFail(id)

        const dados = request.only(['email', 'telefone', 'cep', 'logradouro', 'complemento', 'numero', 'bairro'])

        locadora.merge(dados)

        return locadora.save()
    }

}
