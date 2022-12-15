const apiURL = `/api`;

const API = {
  furniture: {
    shop: `${apiURL}/shop/`,
    details: (id) => `${apiURL}/shop/furniture/${id}/`,
  },
};

export default API;
