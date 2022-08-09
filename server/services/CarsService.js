import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class CarsService{
    async getCars(){
                                         // vvv Query object
       let cars = await dbContext.Cars.find()
       return cars
    }
    async getCarById(carId) {
        let car = await dbContext.Cars.findById(carId)
        if (!car){
            throw new BadRequest('Invalid Car Id')
        }
        return car
    }
    async createCar(carData) {
        let car = await dbContext.Cars.create(carData)
        return car
    }
    async editCar(carId, carData) {
        let car = await this.getCarById(carId)

        car.make = carData.make || car.make
        car.model = carData.model || car.model
        car.price = carData.price || car.price
        car.year = carData.year || car.year
        car.img = carData.img || car.img
        car.description = carData.description || car.description
        car.engineType = carData.engineType || car.engineType

        await car.save()
        return car
    }
    async deleteCar(carId) {
        let car = await this.getCarById(carId)

        await car.remove()
        return
    }
}

export const carsService = new CarsService()