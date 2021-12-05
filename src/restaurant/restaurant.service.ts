import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRestaurantDTO } from './dto/create_restaurant.dto';
import { IRestaurant } from './interfaces/restaurant.interface';


@Injectable()
export class RestaurantService {
    constructor(@InjectModel('Restaurant') private readonly restaurantModel : Model<IRestaurant> ){}

    async getRestaurants():Promise<IRestaurant[]>{
        const restaurants = await this.restaurantModel.find();
        return restaurants;
    }
    async getRestaurantById(restaurantId: string):Promise<IRestaurant>{
        const restaurant = await this.restaurantModel.findById(restaurantId);
        return restaurant;
    }
    async createRestaurant(createRestaurantDTO: CreateRestaurantDTO): Promise<IRestaurant>{
        const restaurant = new this.restaurantModel(createRestaurantDTO);
        await restaurant.save();       
        return restaurant;
    }
    async updateRestaurant(restaurantId: string, createRestaurantDTO: CreateRestaurantDTO):Promise<IRestaurant>{
        const updatedRestaurant = await this.restaurantModel.findByIdAndUpdate(restaurantId, createRestaurantDTO, {new: true})
        return updatedRestaurant;
    }
    async deleteRestaurant(restaurantId: string):Promise<IRestaurant>{
        const deletedRestaurant = await this.restaurantModel.findByIdAndDelete(restaurantId);
        return deletedRestaurant;
    }
    

}
