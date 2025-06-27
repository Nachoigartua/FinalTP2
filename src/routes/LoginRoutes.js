import express from "express";
import { login } from "../controllers/LoginController.js";

class LoginRouter {
  constructor() {
    this.router = express.Router();
  }

  startRoutes() {
    this.router.post("/login", login);
    return this.router;
  }
}

export default LoginRouter;
