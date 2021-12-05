import { Document } from "mongoose";

export interface IRestaurant extends Document{

    readonly name:string;
    readonly address:string;
    readonly telephone:number;
    readonly description:string;
    readonly link:string;
    readonly category:string;
    readonly createdAt:Date;

}