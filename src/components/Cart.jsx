const Cart = ({ cart, updateQuantity, removeFromCart, cartTotal, setView }) => {
  return (
    <div className="container">
      <h2 className="section-title">Your Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>Your cart is empty.</p>
          <button 
            className="btn"
            onClick={() => setView('products')}
            style={{ marginTop: '20px' }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-container">
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-info">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">${item.price}</p>
                <div className="cart-item-actions">
                  <div className="quantity-selector">
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >-</button>
                    <input 
                      type="number" 
                      className="quantity-input"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                    />
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >+</button>
                  </div>
                  <button 
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="cart-summary">
            <p className="cart-total">Total: ${cartTotal.toFixed(2)}</p>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;