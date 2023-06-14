import axios from "axios";

export default axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

// const axios = require('axios').default;

// module.exports = axios.create({
//   baseURL: "https://fakestoreapi.com/products"
// });