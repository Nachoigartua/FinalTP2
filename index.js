import express from "express";
import AnimalRouter from "./routes/AnimalRoutes.js";
import dotenv from "dotenv";
import MongoConnection from "./models/MongoConnection.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await MongoConnection.connection();
    console.log("Conexión a MongoDB exitosa");

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/api", new AnimalRouter().startRoutes());

    app.use((req, res) => {
      res.status(404).json({
        code: 404,
        message: "Recurso no encontrado."
      });
    });

    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
    process.exit(1);
  }
})();