import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

import { useMemo } from 'react'

export function useSumary() {
  const transaction = useContextSelector(TransactionsContext, (context) => {
    return context.transaction
  })

  const sumary = useMemo(() => {
    return transaction.reduce(
      (acc, value) => {
        const entry =
          value.type === 'income' ? acc.income + value.price : acc.income + 0
        const leave =
          value.type === 'outcome' ? acc.outcome + value.price : acc.outcome + 0
        const total = acc.total + value.price

        acc.income = entry
        acc.outcome = leave
        acc.total = total

        return acc
      },
      { income: 0, outcome: 0, total: 0 },
    )
  }, [transaction])

  return sumary
}
