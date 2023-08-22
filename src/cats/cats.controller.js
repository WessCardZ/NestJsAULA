import { Controller, Get, Bind, Param, Res, HttpStatus, Delete, Post, Body, Put, Dependencies, ParseIntPipe } from '@nestjs/common';
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
    @Bind(Param('id', new ParseIntPipe()), Res())
    findOne(id, res){
        const gatoEncontrado = this.catsService.findById(id)
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
    @Bind(Param('id', new ParseIntPipe()), Res())
    remove(id, res){
        const indexGatoEncontrado = this.catsService.findIndexById(id)
        if(indexGatoEncontrado >= 0){
            this.catsService.deleteByIndex(indexGatoEncontrado)
            res.status(HttpStatus.NO_CONTENT).send()
        }
        else{
            res.status(HttpStatus.NOT_FOUND).send()
        }
    }

    @Post()
    @Bind(Body(), Res())
    create(cat, res){
        this.catsService.create(cat)
        res.status(HttpStatus.CREATED).json(cat)
    }

    @Put(':id')
    @Bind(Param('id', new ParseIntPipe()), Body(), Res())
    update(id, cat, res){
        const indexGatoEncontrado = this.catsService.findIndexById(id)
        if(indexGatoEncontrado >= 0){
           this.catsService.update(indexGatoEncontrado, cat)
            res.status(HttpStatus.NO_CONTENT).send()
        }
        else{
            res.status(HttpStatus.NOT_FOUND).send()
        }
    }
}
