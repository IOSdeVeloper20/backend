const express = require("express");
const router = express.Router();
const TshirtController = require("../Controllers/TshirtController");

router.get('/', TshirtController.get_all_Tshirts);
router.post('/', TshirtController.post_Tshirts);
router.put('/', TshirtController.update_Tshirts);
router.delete('/', TshirtController.delete_Tshirts);
