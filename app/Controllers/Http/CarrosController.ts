// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Carro from "App/Models/Carro";
import CarroValidator from "App/Validators/CarroValidator";

export default class CarrosController {
    index(){
        return Carro.all()
    }

    show({request}){
        const id = request.param('id')
        return Carro.findOrFail(id)
    }

    async store({request}){
        const dados = await request.validate(CarroValidator)

        return Carro.create(dados)
    }

    async destroy({request}){
        const id = request.param('id')
        const carro = await Carro.findOrFail(id)

        return carro.delete()
    }

    async update ({request}){
        const id = request.param('id')
        const carro = await Carro.findOrFail(id)

        const dados = request.only(['marca', 'modelo', 'quilometragem', 'placa', 'ano', 'tipocarro', 'cor', 'potencia'])

        carro.merge(dados)

        return carro.save()
    }

}
