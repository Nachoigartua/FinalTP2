import MongoConnection from "../MongoConnection.js";
import { ObjectId } from "mongodb";

class AnimalModelMongo {
  constructor() {
    this.db = MongoConnection.db;
  }

  async getAnimales() {
    const animales = await this.db.collection("animales").find({}).toArray();
    return animales;
  }

  async postAnimal(animal) {
    const result = await this.db.collection("animales").insertOne(animal);
    return { ...animal, _id: result.insertedId };
  }

  async putAnimal(id, update) {
    await this.db.collection("animales").replaceOne(
      { _id: ObjectId.createFromHexString(id) },
      update
    );
    return update;
  }

  async patchAnimal(id, update) {
    await this.db.collection("animales").updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: update }
    );
    return update;
  }

  async deleteAnimal(id) {
    const usrDelete = await this.db.collection("animales").deleteOne(
      { _id: ObjectId.createFromHexString(id) }
    );
    return usrDelete;
  }

  async getAnimalesByEspecie(especie) {
    return this.db.collection("animales").find({ especie }).toArray();
  }

  async getAnimalesByEstado(estado) {
    return this.db.collection("animales").find({ estado }).toArray();
  }
}

export default AnimalModelMongo;