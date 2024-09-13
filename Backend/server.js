import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./Routes/product.route.js";
dotenv.config();
const app = express();
const PORT=process.env.PORT ||5000
app.use(express.json()); //allow us to accept json data in the req.body

app.use("/api/products",router)

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongo is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log("Server started at http://localhost:"+PORT);
});

//zY9QqvET8AkO1bNC
