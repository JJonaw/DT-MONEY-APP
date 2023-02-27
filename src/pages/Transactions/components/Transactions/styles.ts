import styled, { css } from "styled-components";

interface TransactionsProps {
    variant?: 'green' | 'red'
}

export const TransactionsContainer = styled.div<TransactionsProps>`
  background-color: ${(props) => props.theme['gray-700']};
  padding: 1.25rem 2rem 1.25rem 2rem;
  border-radius: 0.375rem;
  width: 100%;
  
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 33.25rem) {
    & {
        justify-content: center;
        flex-direction: column;
        gap: 0.5rem;
    }
  }

  & > div:nth-of-type(1) {
    width: 100%;

    & > p {
        font-weight: 400;
        color: ${(props) => props.theme['gray-300']};
    }
  }
  & > div:nth-of-type(2) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 33.25rem) {
        & {
            display: grid;
            grid-template-columns: auto auto;
            justify-content: space-between;
            grid-template-rows: auto auto;
            gap: 1.25rem;
            grid-template-areas: "price price" "type date";

            & > p:nth-of-type(1) {
                grid-area: price;
            }
            & > p:nth-of-type(2) {
                grid-area: type;
            }
            & > p:nth-of-type(3) {
                grid-area: date;
            }
        }
    }

    & > p:nth-of-type(1) {
        font-weight: 400;
        ${({variant}:TransactionsProps ) => variant === "green" ? 
        css`
        color: ${(props) => props.theme['green-300']};` : 
        css`
        color: ${(props) => props.theme['red-300']};
        `};
    }

    & > p:nth-of-type(2) {
        color: ${(props) => props.theme['gray-500']};
        display: flex;
        align-items: center;
        gap: 4px;
    }

    & > p:nth-of-type(3) {
        color: ${(props) => props.theme['gray-500']};
        display: flex;
        align-items: center;
        gap: 4px;
    }
  }

`