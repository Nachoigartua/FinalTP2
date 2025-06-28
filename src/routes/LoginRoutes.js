import express from "express";
import LoginController from "../controllers/LoginController.js";

class LoginRouter {
  constructor() {
    this.controller = new LoginController();
    this.router = express.Router();
  }

  startRoutes() {
    this.router.post("/login", this.controller.login);
    return this.router;
  }
}

export default LoginRouter;
