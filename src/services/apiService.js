import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to load products. Please try again later.');
  }
};

// Fetch all categories
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to load categories.');
  }
};

// Fetch products by category
export const fetchProductsByCategory = async (category) => {
  try {
    const url = category === 'all' 
      ? `${BASE_URL}/products` 
      : `${BASE_URL}/products/category/${category}`;
    
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to load ${category} products.`);
  }
};

// Fetch single product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to load product details.');
  }
};