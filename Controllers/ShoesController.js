const shoesSchema = require("../Models/ShoesModel");

const get_all_shoes = async (req, res) => {
  try {
    const allShoes = await shoesSchema.find();
    res.status(202).json(allShoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const post_shoes = async (req, res) => {
  try {
    const allShoes = await shoesSchema.find();
    res.status(202).json(allShoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Update_shoes = async (req, res) => {
  try {
    const allShoes = await shoesSchema.find();
    res.status(202).json(allShoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const delete_shoes = async (req, res) => {
  try {
    const allShoes = await shoesSchema.find();
    res.status(202).json(allShoes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  get_all_shoes,
  post_shoes,
  Update_shoes,
  delete_shoes,
};
