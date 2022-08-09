import { CarsController } from './Controllers/CarsController.js';
// import { AuthController } from './Controllers/AuthController.js'

class App {
  // authController = new AuthController();

  carsController = new CarsController();
}

// @ts-ignore
window.app = new App()
