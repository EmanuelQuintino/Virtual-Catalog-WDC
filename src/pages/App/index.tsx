import { CardProduct } from "../../components/CardProduct";
import { products } from "../../data/products";

export function App() {
  return (
    <>
      {products.map((product) => {
        return (
          <CardProduct
            key={product.cod}
            img={product.img}
            cod={product.cod}
            name={product.name}
            oldPrice={product.oldPrice}
            priceInCash={product.priceInCash}
            amountInstallments={product.amountInstallments}
            priceInstallment={product.priceInstallment}
          />
        );
      })}
    </>
  );
}
