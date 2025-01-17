import { Product } from "./slices/productsSlice";

const Item = ({ pro }: { pro: Product | null }) => {
  return (
    <>
      <div>{pro?.description}</div>
    </>
  );
};

export default Item;
