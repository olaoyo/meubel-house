import {
  CART_ADD_FURNITURE,
  CART_REMOVE_FURNITURE,
  FURNITURE_INCREASE_QTY,
  FURNITURE_DECREASE_QTY,
} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {

  switch (action.type) {

    case CART_ADD_FURNITURE:
      const furnitureToAdd = action.payload;
      const furnitureInCart = state.cartItems.find(
        (mueble) => mueble.id === furnitureToAdd.id
      );

      if (furnitureInCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((mueble) =>
            mueble.id === furnitureInCart.id ? furnitureToAdd : mueble
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, furnitureToAdd],
        };
      }


    case FURNITURE_INCREASE_QTY:
      const furnitureIdToIncrease = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.map((furniture) =>
          furniture.id === furnitureIdToIncrease
            ? { qty: furniture.qty++, ...furniture }
            : furniture
        ),
      };

      
    case FURNITURE_DECREASE_QTY:
      const furnitureIdToDecrease = action.payload;

      return {
        ...state,
        cartItems: state.cartItems.map((furniture) =>
          furniture.id === furnitureIdToDecrease && furniture.qty > 1
            ? { qty: furniture.qty--, ...furniture }
            : furniture
        ),
      };
    
    
    case CART_REMOVE_FURNITURE:
      const furnitureToDelete = action.payload;
      
      return { 
        ...state,
        cartItems: state.cartItems.filter((mueble) => mueble.id !== furnitureToDelete)
       };
  

    default:
      return state;
  }
};
