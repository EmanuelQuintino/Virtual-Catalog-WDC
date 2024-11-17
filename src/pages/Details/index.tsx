import { Container } from "./style";
import { products } from "../../data/products";
import { useParams } from "react-router-dom";

export function Details() {
  const { name } = useParams();
  const [product] = products.filter((product) => product.name == name);

  const calcPriceDiscount =
    product.price - (product.price * product.discountPercentage) / 100;
  const priceInstallment = product.price / product.amountInstallments;

  return (
    <Container>
      <header>
        <span className="labelPromotion">Esquenta Black</span>

        <span className="discount">
          -{product.discountPercentage}%<span className="arrow"></span>
        </span>

        <img src={product.img} alt="" loading="lazy" />
      </header>

      <main>
        <span className="cod">cod.: {product.cod}</span>

        <strong>{name}</strong>

        <span className="price">
          de{" "}
          {product.price.toLocaleString("pt-BR", { style: "currency", currency: "brl" })}
        </span>

        <span className="calcPriceDiscount">
          {calcPriceDiscount.toLocaleString("pt-BR", {
            style: "currency",
            currency: "brl",
          })}
        </span>

        <span className="installments">
          ou em {product.amountInstallments}x de{" "}
          {priceInstallment.toLocaleString("pt-BR", {
            style: "currency",
            currency: "brl",
          })}{" "}
          no cartão
        </span>
      </main>

      <footer>
        {products.map((product) => {
          return (
            <div className="productSugestion">
              <img src={product.img} alt="" />
            </div>
          );
        })}
      </footer>
    </Container>
  );
}
