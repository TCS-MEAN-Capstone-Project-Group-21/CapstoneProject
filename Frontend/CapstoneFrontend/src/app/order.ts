import { Product } from "./product"

export class Order {
    _id?:{type:Number, require:true}
    userId?:{type:Number, require:true}
    status?:{type:String, require:true}
    date?:{type:Date, require:true}
    cost?:{type:Number, require:true}
    items?:{type:Array<Product>}
}
