import express from 'express';
import ProductController from './product.controller.js';

const router = express.Router();

const productController = new ProductController();

// Defined routes for different actions and linked them to respective controller methods
router.route('/').get((req, res) => {
  productController.getAllProducts(req, res);
});
router.route('/create').post((req, res) => {
  productController.createNewProduct(req, res);
});
router.route('/:id/update_quantity/').put((req, res) => {
  productController.updateProduct(req, res);
});
router.route('/:id').delete((req, res) => {
  productController.deleteProduct(req, res);
});

export default router;
