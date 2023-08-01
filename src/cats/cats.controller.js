import { Controller, Get, Bind, Param } from '@nestjs/common';

const GATOS = [
    {
        id: 1,
        nome: "Luke",
        corDoOlho: "Castanho claro",
        raca: "Preto"
    },
    {
        id: 2,
        nome: "Estopa",
        corDoOlho: "Azul",
        raca: "Cianes"
    },
    {
        id: 3,
        nome: "Nilo",
        corDoOlho: "Azul",
        raca: "Branco"
    }
]

@Controller('cats')
export class CatsController {
    @Get()
    findAll(){
        return GATOS
    }

    @Get(':id')
    @Bind(Param())
    findOne(params){
        return 'retorna os dados do gato ' + params.id
    }
}
