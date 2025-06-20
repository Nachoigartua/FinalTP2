import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

class MongoConnection {
  static client = new MongoClient(process.env.MONGO_URL);
  static db = null;

    static connection = async () => {
        await this.client.connect()
    }
}

export default MongoConnection;


