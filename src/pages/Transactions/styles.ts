import { motion } from 'framer-motion'
import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;

  margin-top: -68.5px;
`

export const ValuesWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    box-shadow: none;
  }

  @media (max-width: 48.063rem) {
    & {
      overflow: hidden;
      padding-left: 24px;
    }
  }
  & > div {
    width: 100%;
    max-width: 70rem;
    display: flex;
    gap: 2rem;
  }
`

export const TransactionsWrapper = styled.div`
  width: 100%;
  max-width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  @media (max-width: 70rem) {
    & {
      padding: 0 24px 0 24px;
    }
  }
`

export const SearchWrapper = styled.div`
  width: 100%;
  & > form {
    width: 100%;

    display: flex;
    align-items: center;
    gap: 1rem;

    & > input {
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      border: none;
      border-radius: 0.375rem;
      width: 100%;
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    & > button {
      background-color: transparent;
      border: 1px solid ${(props) => props.theme['green-300']};
      padding: 0.875rem 2rem 0.875rem 2rem;
      border-radius: 0.375rem;

      display: flex;
      align-items: center;
      gap: 0.75rem;
      color: ${(props) => props.theme['green-300']};
      font-weight: 700;

      cursor: pointer;

      &:not(:disabled):hover {
        background-color: ${(props) => props.theme['green-500']};
        color: ${(props) => props.theme['white']};
        border-color: ${(props) => props.theme['green-500']};
        transition: background-color 0.5s;
      }

      &:disabled {
        cursor: not-allowed;
      }
    }
  }
`
export const TransactionsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

export const InfoValues = styled.div`
  width: 100%;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > p:first-child {
      color: ${(props) => props.theme['gray-300']};
      font-size: 1.125rem;
    }

    & > p:last-child {
      font-size: 1rem;
      color: ${(props) => props.theme['gray-500']};
    }
  }
`
