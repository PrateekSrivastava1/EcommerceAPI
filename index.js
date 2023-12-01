import express from 'express';

import productRoutes from './src/features/product/product.routes.js';

const app = express();

app.use(express.json());

// Routes for product
app.use('/api/product', productRoutes);

export default app;
