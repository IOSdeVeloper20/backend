const express = require("express");
const router = express.Router();
const shoesController = require("../Controllers/ShoesController");

router.get('/', shoesController.get_all_shoes);
router.post('/', shoesController.post_shoes);
router.put('/', shoesController.Update_shoes);
router.delete('/', shoesController.delete_shoes);
