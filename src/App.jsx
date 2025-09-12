import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import * as apiService from './services/apiService';
import * as cartService from './services/cartService';
import './App.css';

function App() {
  const [view, setView] = useState('home');
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch data on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          apiService.fetchProducts(),
          apiService.fetchCategories()
        ]);
        
        setProducts(productsData);
        setCategories(categoriesData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    
    loadData();
    
    // Load cart from localStorage
    const savedCart = cartService.getCartFromStorage();
    setCart(savedCart);
  }, []);
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    cartService.saveCartToStorage(cart);
  }, [cart]);
  
  // Filter products by category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  // Add to cart function
  const addToCart = (product, quantity = 1) => {
    const updatedCart = cartService.addToCart(cart, product, quantity);
    setCart(updatedCart);
    alert(`${product.title} added to cart!`);
  };
  
  // Remove from cart function
  const removeFromCart = (productId) => {
    const updatedCart = cartService.removeFromCart(cart, productId);
    setCart(updatedCart);
  };
  
  // Update quantity in cart
  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cartService.updateCartItemQuantity(cart, productId, newQuantity);
    setCart(updatedCart);
  };
  
  // Calculate cart total
  const cartTotal = cartService.calculateCartTotal(cart);
  
  // View product details
  const viewProductDetails = (product) => {
    setSelectedProduct(product);
    setView('product-detail');
  };
  
  // Main content based on current view
  const renderContent = () => {
    switch(view) {
      case 'home':
        return (
          <Home 
            products={products} 
            viewProductDetails={viewProductDetails} 
            addToCart={addToCart} 
            setView={setView} 
          />
        );
      case 'products':
        return (
          <Products 
            products={filteredProducts} 
            categories={categories} 
            selectedCategory={selectedCategory} 
            setSelectedCategory={setSelectedCategory} 
            viewProductDetails={viewProductDetails} 
            addToCart={addToCart} 
            loading={loading} 
            error={error} 
          />
        );
      case 'product-detail':
        return (
          <ProductDetailPage 
            selectedProduct={selectedProduct} 
            setView={setView} 
            addToCart={addToCart} 
          />
        );
      case 'cart':
        return (
          <Cart 
            cart={cart} 
            updateQuantity={updateQuantity} 
            removeFromCart={removeFromCart} 
            cartTotal={cartTotal} 
            setView={setView} 
          />
        );
      default:
        return (
          <Home 
            products={products} 
            viewProductDetails={viewProductDetails} 
            addToCart={addToCart} 
            setView={setView} 
          />
        );
    }
  };
  
  return (
    <div className="App">
      <Header cart={cart} setView={setView} />
      <main>
        {renderContent()}
      </main>
      <Footer setView={setView} />
    </div>
  );
}

export default App;