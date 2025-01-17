import { Product } from "./slices/productsSlice";
import Item from "./Item";
import { useGetProductById } from "./hooks/useGetProductByID";

const Products = ({ product }: { product: Product }) => {
  const { pro, getProductWithID } = useGetProductById();

  return (
    <>
      <div
        className="item"
        data-testid="tit"
        onClick={() => getProductWithID(product.id)}
      >
        {product.title}
      </div>
      <Item pro={pro} />
    </>
  );
};

export default Products;
