export const setCartItem = (cartItems) => ({
  type: "SET_CART",
  payload: cartItems,
});

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cartItems: action.payload };

    default:
      return state;
  }
};

export default cartReducer;
