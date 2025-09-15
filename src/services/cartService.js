const CART_STORAGE_KEY = 'shopEasyCart';

export const getCartFromStorage = () => {
  const cartData = localStorage.getItem(CART_STORAGE_KEY);
  return cartData ? JSON.parse(cartData) : [];
};

export const saveCartToStorage = (cart) => {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
};

export const addToCart = (cart, product, quantity = 1) => {
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    return cart.map(item => 
      item.id === product.id 
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  } else {
    return [...cart, { ...product, quantity }];
  }
};

export const removeFromCart = (cart, productId) => {
  return cart.filter(item => item.id !== productId);
};

export const updateCartItemQuantity = (cart, productId, newQuantity) => {
  if (newQuantity < 1) {
    return removeFromCart(cart, productId);
  }
  
  return cart.map(item => 
    item.id === productId 
      ? { ...item, quantity: newQuantity }
      : item
  );
};

export const calculateCartTotal = (cart) => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};