import { instance } from "./getAllProducts";

export const getProductById = async (id: any) => {
  try {
    const response = await instance.get(`/products/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Something went wrong. Please try again."
    );
  }
};
