import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

const getAllProducts = async () => {
  return instance.get("/products");
};

export default getAllProducts;
