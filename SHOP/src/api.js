import express from 'express';

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Mock data
let products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
  { id: 3, name: 'Product 3', price: 300 },
];

// GET route
app.get('/api/products', (req, res) => {
  res.json(products);
});

// POST route
app.post('/api/products', (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT route
app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const updatedProduct = req.body;
  const productIndex = products.findIndex((p) => p.id === parseInt(id));

  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], ...updatedProduct };
    res.json(products[productIndex]);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// DELETE route
app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((p) => p.id === parseInt(id));

  if (productIndex !== -1) {
    const deletedProduct = products.splice(productIndex, 1);
    res.json(deletedProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});