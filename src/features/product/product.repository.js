import { ObjectId } from 'mongodb';
import { ProductModel } from './product.schema.js';

export default class ProductRepository {
  // Add a new product
  async newProduct(name, quantity) {
    try {
      const product = new ProductModel({
        name: name,
        quantity: quantity
      });
      await product.save();
      const newProduct = {
        product
      };
      if (product)
        return {
          success: true,
          msg: 'New Product added successfully',
          details: newProduct
        };
      else return { success: false, msg: 'New Product not added' };
    } catch (err) {
      throw new Error('Something went wrong.');
    }
  }

  // Fetch all the product
  async fetchAllProduct() {
    try {
      const products = await ProductModel.find();
      const allProducts = {
        products
      };
      return allProducts;
    } catch (err) {
      console.log(err);
      throw new Error('Something went wrong in repository');
    }
  }

  // Repository for updating a product
  async updateProduct(productId, number) {
    try {
      const product = await ProductModel.findOneAndUpdate(
        {
          _id: new ObjectId(productId)
        },
        {
          quantity: number
        }
      );
      return product;
    } catch (err) {
      console.log(err);
      throw new Error('Something went wrong in repository');
    }
  }

  // Repository for deleting a product
  async deleteProduct(productId) {
    try {
      const product = await ProductModel.deleteOne({
        _id: new ObjectId(productId)
      });
      return product;
    } catch (err) {
      console.log(err);
      throw new customErrorHandler(500, 'Something went wrong in repository');
    }
  }
}
