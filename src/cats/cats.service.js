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
        return this.cats.find(cat => cat.id === id)
    }
    findIndexById(id){
        return this.cats.findIndex(cat => cat.id === id)
    }
    deleteByIndex(index){
        this.cats.splice(index, 1)
    }
    update(index, cat){
        this.cats.splice(index, 1, cat)
    }
}