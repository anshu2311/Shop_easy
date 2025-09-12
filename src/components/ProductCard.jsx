const ProductCard = ({ product, viewProductDetails, addToCart }) => {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.title} 
        className="product-image"
        onClick={() => viewProductDetails(product)}
        style={{ cursor: 'pointer' }}
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price}</p>
        <button 
          className="add-to-cart"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;