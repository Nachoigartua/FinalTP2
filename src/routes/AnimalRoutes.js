import express from "express";
import AnimalController from "../controllers/AnimalController.js";

class AnimalRouter {
  constructor() {
    this.router = express.Router();
    this.controller = new AnimalController();
  }

  startRoutes() {
    this.router.get("/animales", this.controller.getAnimales);
    this.router.post("/animales", this.controller.postAnimal);
    this.router.patch("/animales/:id", this.controller.patchAnimal);
    this.router.put("/animales/:id", this.controller.putAnimal);
    this.router.delete("/animales/:id", this.controller.deleteAnimal);
    return this.router;
  }
}

export default AnimalRouter;