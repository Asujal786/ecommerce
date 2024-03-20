const express = require("express");
const router = express.Router();
const Product = require("../Models/Kids");
const multer = require('multer');
const path = require('path');

const uploadDir = path.join('C:', 'Users', 'asuja', 'OneDrive', 'Desktop', 'ECommerce', 'e_commerce', 'uploads');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); 
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post("/add", upload.single('image'), async (req, res) => {
    try {
        const productDetails = {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            size: req.body.size,
            category: req.body.category,
            color: req.body.color,
            image: req.file.path
        };

        const newProduct = await Product.create(productDetails);
        res.status(200).json(newProduct);
    } catch (err) {
        res.status(400).send({ message: "There has been an error while creating the new product", error: err });
    }
});

router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(400).send({ message: "There has been an error while fetching the data", error: err });
    }
});

router.get("/:productId", async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
            return;
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ message: "Error fetching product", error: err });
    }
});

router.delete("/delete/:productId", async (req, res) => {
    try {
        const productId = req.params.productId;
        const product = await Product.findById(productId);
        if (!product) {
            res.status(404).json({ message: "Product not found" });
            return;
        }
        await Product.findByIdAndDelete(productId);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting product", error: err });
    }
});

module.exports = router;
