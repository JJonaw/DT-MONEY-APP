import { ReactNode, useCallback, useEffect, useState } from 'react'
import { api } from '../lib/axios'

import { createContext } from 'use-context-selector'

interface Transation {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'outcome' | 'income'
}

interface TransactionsContextType {
  transaction: Transation[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextType)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transaction, setTransation] = useState<Transation[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    // const url = new URL('http://localhost:3000/transactions')

    // if (query) {
    //   url.searchParams.append('q', query)
    // }
    // const response = await fetch(url)
    // const data = await response.json()

    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransation(response.data)
  }, [])

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { category, price, type, description } = data
      const response = await api.post('/transactions', {
        description,
        type,
        price,
        category,
        createdAt: new Date(),
      })

      setTransation((state) => [response.data, ...state])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])
  return (
    <TransactionsContext.Provider
      value={{ transaction, fetchTransactions, createTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
