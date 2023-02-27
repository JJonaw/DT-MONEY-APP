import { ValuesContainer } from './styles'

import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from '../../../../utils/Formatter'

interface ValuesProps {
  Type: string
  Amount: number
}

export function Values({ Type, Amount }: ValuesProps) {
  return (
    <ValuesContainer StyleValue={Type}>
      <header>
        <p>{Type}</p>
        {Type === 'entry' ? <ArrowCircleUp size={32} weight="regular" /> : ''}
        {Type === 'leave' ? <ArrowCircleDown size={32} weight="regular" /> : ''}
        {Type === 'total' ? <CurrencyDollar size={32} weight="fill" /> : ''}
      </header>
      <div>
        <p>{priceFormatter.format(Amount)}</p>
      </div>
      <p>Última entrada em 13 de abril</p>
    </ValuesContainer>
  )
}
