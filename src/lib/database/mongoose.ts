//next JS is serverless so each of our transaction into the data base lasts only for that operation
//benefit= all transactions are independent and more scalable
//this causes issues of traffic and having to establish conn, complete transaction and end conn
//so we use cache to speed up the process
import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// ✅ Extend the Node.js global type
declare global {
  var mongoose: MongooseConnection | undefined;
}

const cached: MongooseConnection = global.mongoose || {
  conn: null,
  promise: null,
};

global.mongoose = cached;

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("Missing MONGODB_URL");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, { dbName: "morphiq", bufferCommands: false });

  cached.conn = await cached.promise;

  return cached.conn;
};