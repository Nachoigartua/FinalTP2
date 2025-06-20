import MongoConnection from "../MongoConnection.js";
import { ObjectId } from "mongodb";

class VeterinarioModelMongo {
  constructor() {
    this.db = MongoConnection.db;
  }

  async getVeterinarios() {
    const veterinarios = await this.db.collection("veterinarios").find({}).toArray();
    return veterinarios;
  }

  async postVeterinario(veterinario) {
    const result = await this.db.collection("veterinarios").insertOne(veterinario);
    return { ...veterinario, _id: result.insertedId };
  }

  async putVeterinario(id, update) {
    await this.db.collection("veterinarios").replaceOne(
      { _id: ObjectId.createFromHexString(id) },
      update
    );
    return update;
  }

  async patchVeterinario(id, update) {
    await this.db.collection("veterinarios").updateOne(
      { _id: ObjectId.createFromHexString(id) },
      { $set: update }
    );
    return update;
  }

  async deleteVeterinario(id) {
    const usrDelete = await this.db.collection("veterinarios").deleteOne(
      { _id: ObjectId.createFromHexString(id) }
    );
    return usrDelete;
  }
}

export default VeterinarioModelMongo;
