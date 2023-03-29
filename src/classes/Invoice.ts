import {HasFormatter} from "../Interfaces/HasFormatter.js"

export class Invoice implements HasFormatter
{
    constructor(
       readonly client:string,
       private details:string,
       private amount:number
    ){}

    format(){
        return `${this.client} of this details${this.details} paying ${this.amount}`;
    }
}