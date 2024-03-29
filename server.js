const express = require("express");
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uuidv4 = require("uuid/v4");

const app = express();
// app.use(bodyParser.json());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/react-shopping-cart-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    _id: { type: String, default: uuidv4() },
    title: String,
    description: String,
    image: String,
    price: Number,
    availableSizes: [String],
  })
);

app.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.send(products);
});

app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const savedProduct = await newProduct.save();
  res.send(savedProduct);
});

app.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log("serve at http://localhost:3001"));
