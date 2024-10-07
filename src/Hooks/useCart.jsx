import { useState, useEffect } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  const addItem = (newItem) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems, newItem];
      saveToLocalStorage(updatedItems);
      return updatedItems;
    });
  };

  const deleteItem = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item, index) => index !== itemId);
      saveToLocalStorage(updatedItems);
      return updatedItems;
    });
  };

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
