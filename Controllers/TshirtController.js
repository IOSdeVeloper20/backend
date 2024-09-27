const TshirtSchema = require("../Models/TshirtsModel");

const get_all_Tshirts = async (req, res) => {
  try {
    const allTshirts = await TshirtSchema.find();
    res.status(202).json(allTshirts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const post_Tshirts = async (req, res) => {
  try {
    const newTshirt = await new TshirtSchema(req.body);
    await newTshirt.save();
    res.status(201).json(newTshirt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const update_Tshirts = async (req, res) => {
  const id = req.params;
  try {
    const updatedTshirt = await TshirtSchema.findByIdAndUpdate(id, req.body);
    res.status(202).json(updatedTshirt);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const delete_Tshirts = async (req, res) => {
  try {
    const allTshirts = await TshirtSchema.find();
    res.status(202).json(allTshirts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  get_all_Tshirts,
  post_Tshirts,
  update_Tshirts,
  delete_Tshirts,
};
