const Header = ({ cart, setView }) => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => setView('home')} style={{ cursor: 'pointer' }}>
            ShopEasy
          </div>
          
          <ul className="nav-links">
            <li><a href="#" onClick={(e) => { e.preventDefault(); setView('home'); }}>Home</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setView('products'); }}>Products</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setView('cart'); }}>Cart ({cart.length})</a></li>
          </ul>
          
          <div className="cart-icon" onClick={() => setView('cart')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;