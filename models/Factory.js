import AnimalModelMongo from "./DAO/AnimalModelMongo.js";
import AnimalModelMemory from "./DAO/AnimalModelMemory.js";

class Factory {
  static create(persistence) {
    switch (persistence) {
      case "mongo":
        return new AnimalModelMongo();
      case "memory":
      default:
        return new AnimalModelMemory();
    }
  }
}

export default Factory;
