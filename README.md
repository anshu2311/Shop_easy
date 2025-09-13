The application is contained in a single HTML file with:
- Embedded CSS styles
- React components defined in script tags
- All functionality in one file for easy execution

## 🏁 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for CDN resources and API calls)

### Installation & Running
1. Download or copy the `index.html` file
2. Open the file in your web browser
3. The application will load immediately

### Alternative: Using Live Server
For better development experience:
1. Install VS Code Live Server extension
2. Right-click on `index.html` and select "Open with Live Server"

## 📱 Usage

### Browsing Products
- Navigate to the "Products" section from the header
- Filter products by category using the category buttons
- Click on any product image to view details

### Shopping Cart
- Click the cart icon in the header to view your cart
- Adjust quantities using the +/- buttons
- Remove items with the "Remove" button
- Items persist between sessions using localStorage

### Product Details
- View product images, description, and pricing
- Select quantity before adding to cart
- Navigate back to products using the back button

## 🎨 Customization

### Styling
All CSS is contained within the `<style>` tags in the HTML file. Key customization areas:
- Color scheme (modify CSS custom properties)
- Layout (adjust grid and flexbox parameters)
- Typography (change font families and sizes)

### Products
The app uses the Fake Store API by default. To use custom products:
1. Modify the `mockProducts` array in the script
2. Update the API service methods to point to your own API

## 🔧 API Integration

The application uses the Fake Store API:
- Products: `https://fakestoreapi.com/products`
- Categories: `https://fakestoreapi.com/products/categories`
- Product by ID: `https://fakestoreapi.com/products/{id}`
- Products by Category: `https://fakestoreapi.com/products/category/{category}`

To integrate with your own backend:
1. Replace the `baseURL` in the `apiService` object
2. Update the API endpoint methods as needed
3. Ensure response formats match the expected structure

## 📊 Component Architecture

The application uses React functional components with hooks:

- **App**: Main component with state management
- **Header**: Navigation with cart counter
- **Footer**: Site links and information
- **Home**: Hero section and featured products
- **Products**: Product listing with category filters
- **ProductCard**: Individual product display
- **ProductDetail**: Detailed product view
- **Cart**: Shopping cart management

## 🧩 Key React Features Demonstrated

- useState for state management
- useEffect for side effects and API calls
- Custom components with props
- Event handling
- Conditional rendering
- List rendering with map()

## 🌐 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- iOS Safari
- Chrome Mobile

## 📈 Performance Features

- Lazy loading of images
- Efficient re-renders with React state management
- Minimal external dependencies
- Optimized CSS for smooth animations

## 🔮 Future Enhancements

Potential improvements for a production version:
- User authentication system
- Payment integration
- Product search functionality
- Product reviews and ratings
- Wishlist functionality
- Order history
- Admin dashboard
- PWA capabilities

## 🐛 Troubleshooting

### Common Issues
1. **API errors**: The Fake Store API might be down - check https://fakestoreapi.com
2. **Images not loading**: Some product images might be blocked by ad blockers
3. **Cart not saving**: Ensure localStorage is enabled in your browser

### Debugging
- Open browser developer tools (F12)
- Check console for error messages
- Verify network requests are successful

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help with implementation, please open an issue in the repository or contact the development team.

