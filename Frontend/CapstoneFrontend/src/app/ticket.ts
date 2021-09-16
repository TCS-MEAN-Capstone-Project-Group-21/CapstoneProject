export class Ticket {
    _id?:number;
    userid?:number; //the name is the id name from the html page of each input/selection
    issue?:String;
    status?:string;
    productprice?:number;
    productquantity?:number

    // COPIED FROM (ticket.model.js)
    // _id:{type:Number, require:true},
    // userid:{type:Number, require:true},
    // issue:{type:String, require:true},
    // status:{type:String, require:true}
    constructor(){}
}
