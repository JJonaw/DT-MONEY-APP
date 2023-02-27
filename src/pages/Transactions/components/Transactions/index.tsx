import { CalendarBlank, TagSimple } from 'phosphor-react'
import { Transation } from '../..'
import { dateFormatter, priceFormatter } from '../../../../utils/Formatter'
import { TransactionsContainer } from './styles'

interface TransationsInfoProps {
  transactionsType: Transation
}

export function TransactionsInfo({ transactionsType }: TransationsInfoProps) {
  return (
    <TransactionsContainer
      variant={transactionsType.type === 'income' ? 'green' : 'red'}
    >
      <div>
        <p>{transactionsType.description}</p>
      </div>
      <div>
        <p>
          {transactionsType.type === 'outcome' && '- '}
          {priceFormatter.format(transactionsType.price)}
        </p>
        <p>
          <TagSimple size={16} weight="regular" /> {transactionsType.category}
        </p>
        <p>
          <CalendarBlank size={16} weight="regular" />
          {dateFormatter.format(new Date(transactionsType.createdAt))}
        </p>
      </div>
    </TransactionsContainer>
  )
}
