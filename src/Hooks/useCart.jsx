import { useQuery, useQueryClient } from "@tanstack/react-query";

const getCartItems = () => {
  return JSON.parse(localStorage.getItem("cartItems")) || [];
};

const useCart = () => {
  const queryClient = useQueryClient();

  const { data: cartItems = [], refetch } = useQuery({
    queryKey: ["cartItems"],
    queryFn: getCartItems,
    initialData: [],
    refetchOnWindowFocus: false, 
  });

  const saveToLocalStorage = (items) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    queryClient.invalidateQueries(["cartItems"]);
  };

  const addItem = (newItem) => {
    const updatedItems = [...cartItems, newItem];
    saveToLocalStorage(updatedItems);
    refetch();
  };

  const deleteItem = (itemId) => {
    const updatedItems = cartItems.filter((_, index) => index !== itemId);
    saveToLocalStorage(updatedItems);
    refetch();
  };

  const updateItem = (itemId, updatedItem) => {
    const updatedItems = cartItems.map((item, index) =>
      index === itemId ? updatedItem : item
    );
    saveToLocalStorage(updatedItems);
    refetch(); 
  };

  return {
    cartItems,
    addItem,
    deleteItem,
    updateItem,
    refetch,
  };
};

export default useCart;
