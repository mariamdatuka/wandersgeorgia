import { useQuery } from "@tanstack/react-query";
import getAllProducts from "./services/getAllProducts";
import { Product } from "./slices/productsSlice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./app/store";
import { getProducts } from "./slices/productsSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useAppDispatch();
  const products = useSelector(
    (state: RootState) => state.allProducts.products
  );

  const { data, isPending, isError, error, isSuccess } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: 1000 * 60 * 5,
  });

  // useEffect(() => {
  //   if (isSuccess && data?.data) {
  //     dispatch(getProducts(data?.data));
  //   }
  // }, [data, dispatch, isSuccess]);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {products?.map((product: Product, i: number) => (
        <div key={i}>{product.title}</div>
      ))}
    </>
  );
}

export default App;
