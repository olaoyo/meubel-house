const apiURL = `/api`;

const API = {
  furniture: {
    shop: `${apiURL}/shop/`,
    details: (id) => `${apiURL}/shop/furniture/${id}/`,
  },
};

export const APILink = {
  furniture: {
    home: `/`,
    shop: `/shop`,
    details: (id) => `/shop/furniture/${id}`,
  },

  cart: `/cart`,
  addToCart: (id, qty) =>`/cart/${id}/qty?=${qty}`,
  checkout: `/login?redirect=chekout`,
  
};

export default API;
