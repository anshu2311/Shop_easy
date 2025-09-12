import { useState } from 'react';

const ProductDetailPage = ({ selectedProduct, setView, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  
  if (!selectedProduct) return <div className="error">Product not found</div>;
  
  return (
    <div className="container">
      <button 
        onClick={() => setView('products')}
        style={{ background: 'none', border: 'none', color: '#4a6cf7', cursor: 'pointer', marginBottom: '20px' }}
      >
        &larr; Back to Products
      </button>
      
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={selectedProduct.image} alt={selectedProduct.title} />
        </div>
        
        <div className="product-detail-info">
          <h1 className="product-detail-title">{selectedProduct.title}</h1>
          <p className="product-detail-price">${selectedProduct.price}</p>
          <span className="product-detail-category">{selectedProduct.category}</span>
          <p className="product-detail-description">{selectedProduct.description}</p>
          
          <div className="quantity-selector">
            <label htmlFor="quantity" style={{ marginRight: '10px' }}>Quantity:</label>
            <button 
              className="quantity-btn"
              onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
            >-</button>
            <input 
              type="number" 
              id="quantity"
              className="quantity-input"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            />
            <button 
              className="quantity-btn"
              onClick={() => setQuantity(prev => prev + 1)}
            >+</button>
          </div>
          
          <button 
            className="add-to-cart"
            style={{ padding: '15px' }}
            onClick={() => addToCart(selectedProduct, quantity)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;