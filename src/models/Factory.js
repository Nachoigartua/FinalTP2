import AnimalModelMemory from "./DAO/AnimalModelMemory.js";
import AnimalModelMongo from "./DAO/AnimalModelMongo.js";

class Factory {
  static get(persistence, mongoDB) {
    switch (persistence) {
      case "mongo":
        console.log("MongoDB persistencia");
        return new AnimalModelMongo(mongoDB);
      case "memory":
      default:
        console.log("Memory persistencia");
        return new AnimalModelMemory();
    }
  }
}

export default Factory;