const express = require("express");

const router = express.Router();

const { creatProduct , getAllProducts } = require("../controller/products/product")

const { AdminAuth } = require("../middleware/products/authAdmin")

// ADD PRODUCT
router.post("/add-product",AdminAuth,creatProduct);

/**
 * @TODO GET ALL PRODUCT
 */
router.get("/get-all",getAllProducts)

module.exports = router;