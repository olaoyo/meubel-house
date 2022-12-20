import {
  CART_ADD_FURNITURE,
  CART_REMOVE_FURNITURE,
} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_FURNITURE:
      const furniture = action.payload;
      const furnitureInCart = state.cartItems.find(
        (mueble) => mueble.id === furniture.id
      );

      if (furnitureInCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((mueble) =>
            mueble.id === furnitureInCart.id ? furniture : mueble
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, furniture],
        };
      }

    case CART_REMOVE_FURNITURE:
      return { loading: false, cartItems: action.payload };

    default:
      return state;
  }
};
