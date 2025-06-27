import express from "express";
import VeterinarioController from "../controllers/VeterinarioController.js";
import authMiddleware from "../middlewares/auth.js";

class VeterinarioRouter {
  constructor() {
    this.router = express.Router();
    this.controller = new VeterinarioController();
  }

  startRoutes() {
    this.router.get("/veterinarios", this.controller.getVeterinarios);
    this.router.post("/veterinarios", authMiddleware.verifyToken, this.controller.postVeterinario);
    this.router.patch("/veterinarios/:id", this.controller.patchVeterinario);
    this.router.put("/veterinarios/:id", this.controller.putVeterinario);
    this.router.delete("/veterinarios/:id", authMiddleware.verifyToken, this.controller.deleteVeterinario);
    return this.router;
  }
}

export default VeterinarioRouter;
