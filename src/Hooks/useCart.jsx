import { useState, useEffect } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from local storage on initial render
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  // Save cart items to local storage
  const saveToLocalStorage = (items) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  // Add item to cart
  const addItem = (newItem) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, newItem];
      saveToLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  // Delete item from cart
  const deleteItem = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item, index) => index !== itemId);
      saveToLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  // Update item in cart
  const updateItem = (itemId, updatedItem) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item, index) =>
        index === itemId ? updatedItem : item
      );
      saveToLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  return {
    cartItems,
    addItem,
    deleteItem,
    updateItem,
  };
};

export default useCart;
