import axios from "axios";

export const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

const getAllProducts = async () => {
  try {
    const response = await instance.get("/products");
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Something went wrong. Please try again."
    );
  }
};

export default getAllProducts;
