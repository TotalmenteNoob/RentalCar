// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Locacao from "App/Models/Locacao";
import LocacaoValidator from "App/Validators/LocacaoValidator";

export default class LocacaosController {
    index(){
        return Locacao.all()
    }

    show({request}){
        const id = request.param('id')
        return Locacao.findOrFail(id)
    }

    async store({request}){
        const dados = await request.validate(LocacaoValidator)

        return Locacao.create(dados)
    }

    async destroy({request}){
        const id = request.param('id')
        const locacao = await Locacao.findOrFail(id)

        return locacao.delete()
    }

    async update ({request}){
        const id = request.param('id')
        const locacao = await Locacao.findOrFail(id)

        const dados = request.only(['custo', 'iniciolocacao', 'fimlocacao', 'carroId', 'clienteId', 'locadorainicioId', 'locadorafimId'])

        locacao.merge(dados)

        return locacao.save()
    }

}
