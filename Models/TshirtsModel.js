const { default: mongoose } = require("mongoose");
const mongoDB = require("mongoose");

const TshirtsSchema = new mongoDB.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, required: true },
  brand: { type: String, required: true },
  size: { type: stringify, required: true },
  img: { type: string, required: true },
});

const Tshirt = mongoose.model("Tshirt", TshirtsSchema);

module.exports = {
  Tshirt,
};
