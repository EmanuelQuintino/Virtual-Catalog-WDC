import styled from "styled-components";

export const Container = styled.div`
  outline: 1px solid ${({ theme }) => theme.colors.LIGHT500};
  padding: 2.4rem;
  border-radius: 1.6rem;
  width: 22rem;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  position: relative;

  .labelPromotion {
    position: absolute;
    top: 1.6rem;
    left: 1.6rem;
    padding: 0.8rem;
    background: ${({ theme }) => theme.colors.SECONDARY400};
    color: ${({ theme }) => theme.colors.LIGHT400};
    border-radius: 0.8rem;
    font-size: 1rem;
    font-weight: 600;
  }

  .discount {
    position: absolute;
    top: 0;
    right: 1.6rem;
    padding: 0.6rem;
    background: ${({ theme }) => theme.colors.PRIMARY500};
    color: ${({ theme }) => theme.colors.LIGHT400};
    font-size: 1.2rem;
    font-weight: 600;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: -11px;
      width: 0;
      height: 0;
      border-left: 23px solid transparent;
      border-right: 23px solid transparent;
      border-top: 13px solid #bf0811;
      font-size: 0;
      line-height: 0;
      z-index: -1;
    }
  }

  img {
    width: 100%;
    mix-blend-mode: multiply;
  }

  .cod {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.LIGHT700}88;
  }

  strong {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.LIGHT700};
  }

  .price {
    color: ${({ theme }) => theme.colors.PRIMARY500};
    text-decoration: line-through;
  }

  .calcPriceDiscount {
    color: ${({ theme }) => theme.colors.SECONDARY400};
    color: ${({ theme }) => theme.colors.SECONDARY400};
    font-size: 2.8rem;
    font-weight: 700;
  }

  .installments {
    color: ${({ theme }) => theme.colors.SECONDARY400};
    font-size: 1.8rem;
  }
`;
