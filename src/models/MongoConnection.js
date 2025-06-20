import { MongoClient } from 'mongodb'

class MongoConnection {
    static client;
    static db;

    static async connection() {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL no está definido en el entorno");
        }
        this.client = new MongoClient(process.env.MONGO_URL);
        await this.client.connect();
        this.db = this.client.db(process.env.MONGO_DB_NAME || "tp2");
    }
}

export default MongoConnection;