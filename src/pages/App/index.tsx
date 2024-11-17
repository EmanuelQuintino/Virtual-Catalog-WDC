import { CardProduct } from "../../components/CardProduct";
import { products } from "../../data/products";

export function App() {
  return (
    <>
      {products.map((product) => {
        return (
          <CardProduct
            key={product.cod}
            cod={product.cod}
            name={product.name}
            priceInCash={product.priceInCash}
          />
        );
      })}
    </>
  );
}
