import { CardProps } from "../../@types/cardProps";
import { Container } from "./style";

export function CardProduct({
  img,
  cod,
  name,
  oldPrice,
  priceInCash,
  amountInstallments,
  priceInstallment,
}: CardProps) {
  return (
    <Container>
      <img src={img} alt="" />
      <span className="cod">cod.: {cod}</span>
      <strong>{name}</strong>
      <span className="oldPrice">de {oldPrice}</span>
      <span className="oriceInCash">{priceInCash}</span>
      <span className="installments">
        ou em ${amountInstallments}x de {priceInstallment} no cartão
      </span>
    </Container>
  );
}
