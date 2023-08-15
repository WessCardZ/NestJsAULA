import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    constructor(){
        this.cats = []
    }
    findAll(){
        return this.cats
    }
    create(cat){
        this.cats.push(cat)
    }
    findById(id){
       return this.cats.find(cat => cat.id == id)
    }
}