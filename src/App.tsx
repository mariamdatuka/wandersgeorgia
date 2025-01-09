function App() {
  // const dispatch = useAppDispatch();
  // const products = useSelector(
  //   (state: RootState) => state.allProducts.products
  // );

  // const { data, isPending, isError, error, isSuccess } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: getAllProducts,
  //   staleTime: 1000 * 60 * 5,
  // });

  // useEffect(() => {
  //   if (isSuccess && data?.data) {
  //     dispatch(getProducts(data?.data));
  //   }
  // }, [data, dispatch, isSuccess]);

  // if (isPending) {
  //   return <p>Loading...</p>;
  // }

  // if (isError) {
  //   return <p>Error: {error.message}</p>;
  // }

  return (
    <>
      {/* {products?.map((product: Product, i: number) => (
        <div key={i}>{product.title}</div>
      ))} */}
      <h1>Hello</h1>
    </>
  );
}

export default App;
