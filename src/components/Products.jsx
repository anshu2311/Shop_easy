import ProductCard from '../components/ProductCard';

const Products = ({ 
  products, 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  viewProductDetails, 
  addToCart, 
  loading, 
  error 
}) => {
  return (
    <div className="container">
      <h2 className="section-title">Our Products</h2>
      
      <div className="categories">
        <button 
          className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        {categories.map(category => (
          <button 
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      {loading ? (
        <div className="loading">Loading products...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              viewProductDetails={viewProductDetails} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;