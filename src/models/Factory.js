import AnimalModelMemory from "./DAO/AnimalModelMemory.js";
import AnimalModelMongo from "./DAO/AnimalModelMongo.js";
import VeterinarioModelMemory from "./DAO/VeterinarioModelMemory.js";
import VeterinarioModelMongo from "./DAO/VeterinarioModelMongo.js";

class Factory {
  static get(model, mongoDB) {
    const persistence = process.env.PERSISTENCE || 'memory';
    switch (model) {
      case "animal":
        if (persistence === "mongo") {
          return new AnimalModelMongo(mongoDB);
        } else {
          return new AnimalModelMemory();
        }
      case "veterinario":
        if (persistence === "mongo") {
          return new VeterinarioModelMongo(mongoDB);
        } else {
          return new VeterinarioModelMemory();
        }
      default:
        throw new Error("Modelo no soportado");
    }
  }
}

export default Factory;