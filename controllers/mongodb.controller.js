import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const uri = process.env.mongodb_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const db = client.db("videoApp");

export const video = db.collection("video-library.video");
export default db;

client.connect((err) => {
  const collection = client.db("test").collection("devices");

  client.close();
});
