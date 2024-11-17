import { CardProps } from "../../@types/cardProps";
import { Container } from "./style";

export function CardProduct({
  img,
  cod,
  name,
  price,
  discountPercentage,
  amountInstallments,
}: CardProps) {
  console.log({ price, discountPercentage });

  const calcPriceDiscount = price - (price * discountPercentage) / 100;
  const priceInstallment = price / amountInstallments;

  return (
    <Container>
      <span className="labelPromotion">Esquenta Black</span>
      <span className="discount">
        -{discountPercentage}%<span className="arrow"></span>
      </span>

      <img src={img} alt="" loading="lazy" />
      <span className="cod">cod.: {cod}</span>
      <strong>{name}</strong>

      <span className="price">
        de {price.toLocaleString("pt-BR", { style: "currency", currency: "brl" })}
      </span>

      <span className="calcPriceDiscount">
        {calcPriceDiscount.toLocaleString("pt-BR", {
          style: "currency",
          currency: "brl",
        })}
      </span>

      <span className="installments">
        ou em {amountInstallments}x de{" "}
        {priceInstallment.toLocaleString("pt-BR", {
          style: "currency",
          currency: "brl",
        })}{" "}
        no cartão
      </span>
    </Container>
  );
}
