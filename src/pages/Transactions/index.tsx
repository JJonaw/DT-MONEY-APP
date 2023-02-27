import { Header } from '../../components/Header'
import { Values } from './components/Values'

import { useState, useEffect, useRef } from 'react'

import { useContextSelector } from 'use-context-selector'

import { motion } from 'framer-motion'

import {
  InfoValues,
  SearchWrapper,
  TransactionsContainer,
  TransactionsContent,
  TransactionsWrapper,
  ValuesWrapper,
} from './styles'

import { TransactionsInfo } from './components/Transactions'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useSumary } from '../../hooks/useSumary'
import { SearchForm } from './components/SearchForm'

export interface Transation {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

export function Transactions() {
  const transaction = useContextSelector(TransactionsContext, (context) => {
    return context.transaction
  })

  const sumary = useSumary()

  const carousel = useRef<any>() // tipar mais tarde
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])
  return (
    <>
      <Header />
      <TransactionsContainer>
        <ValuesWrapper ref={carousel} whileTap={{ cursor: 'grabbing' }}>
          <motion.div drag="x" dragConstraints={{ right: 0, left: -width }}>
            <Values Type="entry" Amount={sumary.income} />
            <Values Type="leave" Amount={sumary.outcome} />
            <Values Type="total" Amount={sumary.total} />
          </motion.div>
        </ValuesWrapper>

        <TransactionsWrapper>
          <InfoValues>
            <div>
              <p>Transações</p>
              <p>4 itens</p>
            </div>
          </InfoValues>
          <SearchWrapper>
            <SearchForm />
          </SearchWrapper>
          <TransactionsContent>
            {transaction.map((session: Transation) => {
              return (
                <TransactionsInfo key={session.id} transactionsType={session} />
              )
            })}
          </TransactionsContent>
        </TransactionsWrapper>
      </TransactionsContainer>
    </>
  )
}
