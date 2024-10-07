import { useQuery, useQueryClient } from "@tanstack/react-query";

const CART_ITEMS_KEY = "cartItems";
const QUERY_KEY = ["cartItems"];

const getCartItems = () => {
  return JSON.parse(localStorage.getItem(CART_ITEMS_KEY)) || [];
};

const useCart = () => {
  const queryClient = useQueryClient();

  const { data: cartItems = [], refetch } = useQuery({
    queryKey: QUERY_KEY,
    queryFn: getCartItems,
    initialData: [],
    refetchOnWindowFocus: false,
  });

  const saveToLocalStorage = (items) => {
    localStorage.setItem(CART_ITEMS_KEY, JSON.stringify(items));
    queryClient.setQueryData(QUERY_KEY, items); 
  };

  const addItem = (newItem) => {
    const updatedItems = [...cartItems, newItem];
    saveToLocalStorage(updatedItems);
  };

  const deleteItem = (itemId) => {
    const updatedItems = cartItems.filter((_, index) => index !== itemId);
    saveToLocalStorage(updatedItems);
  };

  const updateItem = (itemId, updatedItem) => {
    const updatedItems = cartItems.map((item, index) =>
      index === itemId ? updatedItem : item
    );
    saveToLocalStorage(updatedItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price || 0), 0);
};

const total = calculateTotal();

  return {
    cartItems,
    addItem,
    deleteItem,
    updateItem,
    total,
  };
};

export default useCart;