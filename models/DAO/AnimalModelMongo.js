import MongoConnection from "../MongoConnection.js";
import { ObjectId } from "mongodb";

class AnimalModelMongo {
  constructor() {
    this.db = MongoConnection.db;
  }

  async getAnimales() {
    return await this.db.collection("animales").find({}).toArray();
  }

  async postAnimal(animal) {
    const result = await this.db.collection("animales").insertOne(animal);
    return { ...animal, _id: result.insertedId };
  }

  async patchAnimal(id, update) {
    await this.db.collection("animales").updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: update }
    );
    return update;
  }

  async deleteAnimal(id) {
    await this.db.collection("animales").deleteOne({
      _id: ObjectId.createFromHexString(id),
    });
    return { mensaje: "Animal eliminado correctamente" };
  }
}

export default AnimalModelMongo;
