import express from "express";
import AnimalController from "../controllers/AnimalController.js";
import authMiddleware from "../middlewares/auth.js";

class AnimalRouter {
  constructor() {
    this.router = express.Router();
    this.controller = new AnimalController();
  }

  startRoutes() {
    this.router.get("/animales", authMiddleware.verifyToken, this.controller.getAnimales);
    this.router.post("/animales", authMiddleware.verifyToken, this.controller.postAnimal);
    this.router.patch("/animales/:id", authMiddleware.verifyToken, this.controller.patchAnimal);
    this.router.put("/animales/:id", authMiddleware.verifyToken, this.controller.putAnimal);
    this.router.delete("/animales/:id", authMiddleware.verifyToken, this.controller.deleteAnimal);
    return this.router;
  }
}

export default AnimalRouter;