import mongoose from "mongoose";

type ConnectionType = {
  isConnected?: number;
};

const connection: ConnectionType = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Database already connected!!");
    return;
  }

  try {
    const response = await mongoose.connect(process.env.DATABASE_URL || "", {});

    connection.isConnected = response.connections[0].readyState

    console.log("DB connected successfully")

  } catch (error) {
    console.log("Database conection failed: ", error)
    process.exit(1)
  }
}

export default dbConnect
