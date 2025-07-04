import express from "express";
import AnimalRouter from "./routes/AnimalRoutes.js";
import VeterinarioRouter from "./routes/VeterinarioRoutes.js";
import dotenv from "dotenv";
import MongoConnection from "./models/MongoConnection.js";
import LoginRouter from "./routes/LoginRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const persistencia = process.env.PERSISTENCE ;
console.log("Persistencia seleccionada:", persistencia);

(async () => {
  try {
    if (persistencia === "mongo") {
      await MongoConnection.connection();
    }

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/api", new AnimalRouter().startRoutes());
    app.use("/api", new VeterinarioRouter().startRoutes());
    app.use("/api", new LoginRouter().startRoutes());

    app.use((req, res) => {
      res.status(404).json({
        code: 404,
        message: "Recurso no encontrado."
      });
    });

    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (err) {
    if (persistencia === "mongo") {
      console.error("Error al conectar a MongoDB:", err);
    } else {
      console.error("Error al iniciar la app:", err);
    }
  }
})();