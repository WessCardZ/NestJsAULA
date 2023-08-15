import { Controller, Get, Bind, Param, Res, HttpStatus, Delete, Post, Body, Put, Dependencies } from '@nestjs/common';
import { CatsService } from './cats.service';

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
@Dependencies(CatsService)
export class CatsController {
    constructor(catsService){
        this.catsService = catsService
    }

    @Get()
    findAll(){
        return this.catsService.findAll()
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
    @Bind(Param('id'), Res())
    remove(id, res){
        const indexGatoEncontrado = GATOS.findIndex(gato => gato.id == id)
        if(indexGatoEncontrado >= 0){
            GATOS.splice(indexGatoEncontrado, 1)
            res.status(HttpStatus.NO_CONTENT).send()
        }
        else{
            res.status(HttpStatus.NOT_FOUND).send()
        }
    }

    @Post()
    @Bind(Body(), Res())
    create(cat, res){
        GATOS.push(cat)
        res.status(HttpStatus.CREATED).json(cat)
    }

    @Put(':id')
    @Bind(Param('id'), Body(), Res())
    update(id, cat, res){
        const indexGatoEncontrado = GATOS.findIndex(gato => gato.id == id)
        if(indexGatoEncontrado >= 0){
            GATOS.splice(indexGatoEncontrado, 1, cat)
            res.status(HttpStatus.NO_CONTENT).send()
        }
        else{
            res.status(HttpStatus.NOT_FOUND).send()
        }
    }
}
