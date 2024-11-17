import { CardProps } from "../../@types/cardProps";
import { Container } from "./style";

export function CardProduct({ name, priceInCash }: CardProps) {
  return (
    <Container>
      <h1>{name}</h1>
      <strong>{priceInCash}</strong>
    </Container>
  );
}
