import ProductCard from '../components/ProductCard';

const Home = ({ products, viewProductDetails, addToCart, setView }) => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <h1>Welcome to ShopEasy</h1>
          <p>Discover amazing products at great prices. Shop with confidence and enjoy fast delivery.</p>
          <button className="btn" onClick={() => setView('products')}>Shop Now</button>
        </div>
      </div>
      
      <div className="container">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {products.slice(0, 4).map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              viewProductDetails={viewProductDetails} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;