import { CardProduct } from "../../components/CardProduct";
import { products } from "../../data/products";
import { Container } from "./style";

export function App() {
  return (
    <Container>
      {products.map((product) => {
        return (
          <CardProduct
            key={product.cod}
            img={product.img}
            cod={product.cod}
            name={product.name}
            price={product.price}
            discountPercentage={product.discountPercentage}
            amountInstallments={product.amountInstallments}
          />
        );
      })}
    </Container>
  );
}
