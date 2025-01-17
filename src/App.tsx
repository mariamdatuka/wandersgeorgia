import { useSelector } from "react-redux";
import { getProducts, Product } from "./slices/productsSlice";
import getAllProducts from "./services/getAllProducts";
import { RootState, useAppDispatch } from "./app/store";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import Products from "./Products";

function App() {
  const dispatch = useAppDispatch();
  const products = useSelector(
    (state: RootState) => state.allProducts.products
  );

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
  });

  useEffect(() => {
    if (data) {
      dispatch(getProducts(data));
    }
  }, [data, dispatch]);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return (
      <div style={{ color: "red", textAlign: "center" }}>
        <p>{error.message}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <>
      {products?.map((item: Product, i) => (
        <Products key={i} product={item} />
      ))}
    </>
  );
}

export default App;
