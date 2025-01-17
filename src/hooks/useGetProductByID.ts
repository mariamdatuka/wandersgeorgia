import { useState } from "react";
import { Product } from "../slices/productsSlice";
import { getProductById } from "../services/getProdutsById";

export const useGetProductById = () => {
  const [pro, setProduct] = useState<Product | null>(null);
  const getProductWithID = async (id: number) => {
    const response = await getProductById(id);
    setProduct(response);
  };
  return { pro, getProductWithID };
};
