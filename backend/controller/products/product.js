const { messaging } = require("firebase-admin");
const { db } = require("../../config/firebase");

const creatProduct = async (req, res) => {

    try {

        const product = req.body;

        // Get all collections
        const collections = await db.listCollections();

        // Check products collection exists or not
        const collectionExists = collections.some(
            (collection) => collection.id === "products"
        );

        // Add product document
        const response = await db.collection("products").add(product);

        res.status(201).json({
            success: true,
            message: "Product added successfully",
            documentId: response.id
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const getAllProducts = async (req, res) => {
    try {
        const allProduct = await db.collection("products").get();

        let products = [];

        allProduct.forEach((doc) => {

            products.push({
                id: doc.id,
                ...doc.data()
            });

        });

        res.json({
            success: true,
            data: products
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    creatProduct,
    getAllProducts
}