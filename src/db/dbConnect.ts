import mongoose from "mongoose";
export async function dbConnect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Database connected");
    });
    connection.on("error", (err) => {
      console.log("error: ", err);
    });
  } catch (error: any) {
    console.log(error);
  }
}