import { Controller, Get, Bind, Param, Res, HttpStatus, Delete } from '@nestjs/common';

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
    @Bind(Param(), Res())
    findOne(params, res){
        const gatoEncontrado = GATOS.find(gato => gato.id == params.id)
        if(gatoEncontrado){
            res.status(HttpStatus.OK).json(gatoEncontrado)
            // return gatoEncontrado
        }
        else{
            res.status(HttpStatus.NOT_FOUND).send()
            // return "gato não encontrado"
        }
       
    }

    @Delete(':id')
    @Bind(Param('id'))
    remove(id){
        return `Remove gato com id = ${id}.`
    }
}
