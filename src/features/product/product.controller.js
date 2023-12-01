import ProductRepository from './product.repository.js';

export default class ProductController {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  //  adding a product
  async createNewProduct(req, res, next) {
    try {
      const { name, quantity } = req.body;
      const product = await this.productRepository.newProduct(name, quantity);
      if (product.success)
        res.status(201).json({ success: true, msg: product.msg, data: product.details });
      else res.status(400).json({ success: false, msg: product.msg });
    } catch (err) {
      console.log(err);
      throw new Error('Something went wrong in controller');
    }
  }

  //  fetching all product
  async getAllProducts(req, res, next) {
    try {
      const allProducts = await this.productRepository.fetchAllProduct();
      if (allProducts) res.json({ success: true, data: allProducts });
      else res.json({ success: false, msg: 'Could not find products' });
    } catch (err) {
      console.log(err);
      throw new Error('Something went wrong in controller.');
    }
  }

  //  updating a product
  async updateProduct(req, res, next) {
    try {
      const id = req.params.id;
      const number = req.query.number;
      const product = await this.productRepository.updateProduct(id, number);
      if (product)
        res.json({
          success: true,
          data: { product: product, message: 'Product updated successfully' }
        });
      else res.json({ success: false, msg: 'product not updated' });
    } catch (err) {
      console.log(err);
      throw new Error('Something went wrong in controller');
    }
  }

  //  deleting a product
  async deleteProduct(req, res, next) {
    const id = req.params.id;
    const product = await this.productRepository.deleteProduct(id);
    if (product) res.json({ success: true, data: { message: 'Product deleted' } });
    else res.json({ success: false, msg: 'Product not deleted' });
  }
}
