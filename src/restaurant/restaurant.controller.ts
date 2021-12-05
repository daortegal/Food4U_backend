import { Body, Controller, Get, HttpStatus, NotFoundException, Post, Res, Param, Put, Delete, Query } from '@nestjs/common';
import { CreateRestaurantDTO } from './dto/create_restaurant.dto';
import { RestaurantService } from './restaurant.service';


@Controller('restaurant')
export class RestaurantController {

    constructor(private readonly restaurantService:RestaurantService ){}

    @Get()
    async getRestaurantList(@Res() res){
        const restaurants = await this.restaurantService.getRestaurants();
        return res.status(HttpStatus.OK).send(restaurants);
    }
    @Get('/:restaurantId')
    async getRestaurant(@Res() res, @Param('restaurantId') id){
        const restaurant = await this.restaurantService.getRestaurantById(id);
        if (!restaurant){
            throw new NotFoundException('Restaurant does not exist');
        }
        return res.status(HttpStatus.OK).send(restaurant);
    }

    @Post('create')
    async createNewRestaurant(@Res() res, @Body() createRestaurantDTO:CreateRestaurantDTO){
        const restaurant = await this.restaurantService.createRestaurant(createRestaurantDTO);

        return res.status(HttpStatus.CREATED).send(restaurant);
    }
    @Put('/update/:restaurantId')
    async updateRestaurant(@Res() res, @Body() createRestaurantDTO: CreateRestaurantDTO, @Param('restaurantId') id){
        const restaurant = await this.restaurantService.updateRestaurant(id, createRestaurantDTO);
        if (!restaurant){
            throw new NotFoundException('Restaurant does not exist');
        }
        return res.status(HttpStatus.OK).send(restaurant);
    }

    @Delete('/delete')
    async deleteRestaurant( @Res() res, @Query('restaurantId') id){

            const restaurant = await this.restaurantService.deleteRestaurant(id);

        if (!restaurant){
            throw new NotFoundException('Restaurant does not exist');
        }
        return res.status(HttpStatus.OK).send(restaurant);
    }
    
}
