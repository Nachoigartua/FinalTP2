import AnimalModelMemory from "./DAO/AnimalModelMemory.js";
import AnimalModelFS from "./DAO/AnimalModelFS.js";
import AnimalModelMongo from "./DAO/AnimalModelMongo.js";
import VeterinarioModelMemory from "./DAO/VeterinarioModelMemory.js";
import VeterinarioModelFS from "./DAO/VeterinarioModelFS.js";
import VeterinarioModelMongo from "./DAO/VeterinarioModelMongo.js";

class Factory {
  static get(model, mongoDB) {
    const persistence = process.env.PERSISTENCE || 'memory';
    switch (model) {
      case "animal":
        if (persistence === "mongo") {
          return new AnimalModelMongo(mongoDB);
        } else if (persistence === "fs") {
          return new AnimalModelFS();
        } else {
          return new AnimalModelMemory();
        }
      case "veterinario":
        if (persistence === "mongo") {
          return new VeterinarioModelMongo(mongoDB);
        } else if (persistence === "fs") {
          return new VeterinarioModelFS();
        } else {
          return new VeterinarioModelMemory();
        }
      default:
        throw new Error("Modelo no soportado");
    }
  }
}

export default Factory;