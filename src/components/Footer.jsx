const Footer = ({ setView }) => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ShopEasy</h3>
            <p>Your one-stop shop for all your needs. Quality products at affordable prices.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setView('home'); }}>Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setView('products'); }}>Products</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setView('cart'); }}>Cart</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <ul>
              <li>Email: support@shopeasy.com</li>
              <li>Phone: +911111122222</li>
              <li>Address: 123 Commerce, Bilaspur, Chattisgarh, India</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 ShopEasy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;