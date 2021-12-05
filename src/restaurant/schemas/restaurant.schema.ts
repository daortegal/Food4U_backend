import { Schema } from "mongoose";

export const RestaurantSchema = new Schema({


    name: {type: String, required: true},
    address: {type: String, required: true},
    telephone: {type: Number, required: true},
    description:  {type: String, required: true},
    link: String,
    category: {type: String, required: true},
    createdAt: {
        type: Date,
        default: Date.now
    }

});
