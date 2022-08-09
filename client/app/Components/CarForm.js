import { Car } from "../Models/Car.js";

// TODO explain optional params
// @ts-ignore
export function getCarForm(car = new Car({})) {

  let submitAction = 'app.carsController.createCar()'
  if(car.id){
    submitAction = `app.carsController.editCar('${car.id}')`
  }

  return `
  <form class="col-10 bg-white p-3 elevation-2" onsubmit="${submitAction}">
    <h3 class="text-primary">List Your Car</h3>
    <div class="row">
      <div class="col-4">
        <label class="form-label" for="make">Make</label>
        <input class="form-control" type="text" minlength="2" id="make" name="make" value="${car.make}" >
      </div>
      <div class="col-4">
        <label class="form-label" for="model">Model</label>
        <input class="form-control" type="text" id="model" name="model" value="${car.model}">
      </div>
      <div class="col-4">
        <label class="form-label" for="year">Year</label>
        <input class="form-control" type="number" id="year" name="year" min="1918" value="${car.year}">
      </div>
      <label class="form-label" for="price">Price</label>
      <input class="form-control" type="number" min="1000" id="price" name="price" value="${car.price}">
      <label class="form-label" for="img">Image</label>
      <input class="form-control" type="text" id="img" name="img" value="${car.img}">
      <label class="form-label" for="description">Description</label>
      <textarea class="w-100 form-control" name="description" id="description" rows="5" value="${car.description}"></textarea>
      <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
    </div>
  </form>
  `



}