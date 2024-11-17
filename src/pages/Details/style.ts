import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  header {
    position: relative;
    padding: 2.4rem 2.4rem 0;

    .labelPromotion {
      position: absolute;
      top: 2.4rem;
      left: 2.4rem;
      padding: 0.8rem;
      background: ${({ theme }) => theme.colors.SECONDARY400};
      color: ${({ theme }) => theme.colors.LIGHT400};
      border-radius: 0.8rem;
      font-size: 1rem;
      font-weight: 600;
    }

    .discount {
      position: absolute;
      top: 2rem;
      right: 2.4rem;
      padding: 0.6rem;
      background: ${({ theme }) => theme.colors.PRIMARY500};
      color: ${({ theme }) => theme.colors.LIGHT400};
      font-size: 1.2rem;
      font-weight: 600;
      width: 4rem;
      text-align: center;

      &::after {
        content: "";
        position: absolute;
        z-index: -1;
        left: 50%;
        transform: translateX(-50%);
        bottom: -11px;
        border-left: 23px solid transparent;
        border-right: 23px solid transparent;
        border-top: 13px solid #bf0811;
      }
    }

    img {
      width: 100%;
      margin-top: 4rem;
      mix-blend-mode: multiply;
    }
  }

  main {
    padding: 1.2rem 3.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

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
      font-size: 2.4rem;
      font-weight: 700;
    }

    .installments {
      color: ${({ theme }) => theme.colors.SECONDARY400};
      font-size: 1.4rem;
    }
  }

  footer {
    padding: 1.2rem 0 2.4rem 2.4rem;
    width: 100%;

    strong {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.LIGHT700};
    }

    .sugestionProducts {
      display: flex;
      align-items: center;
      gap: 1.6rem;
      overflow-x: auto;
      padding: 0.5rem 0;
      padding-right: 1.6rem;

      &::-webkit-scrollbar {
        height: 0.8rem;
      }

      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.LIGHT400};
        border-radius: 0.4rem;
      }

      .productSugestion {
        flex: 0 0 auto;
        width: 12rem;
        height: 16rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid ${({ theme }) => theme.colors.LIGHT700}44;
        border-radius: 8px;
        padding: 0.8rem;

        img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        p {
          margin-top: 0.8rem;
          font-size: 0.9rem;
          text-align: center;
          color: ${({ theme }) => theme.colors.LIGHT700};
        }
      }
    }
  }
`;
