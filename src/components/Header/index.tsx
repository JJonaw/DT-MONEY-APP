import { HeaderContainer } from './styles'

import IgniteLogo from '../../assets/Ignitelogo.svg'

import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <div>
          <img src={IgniteLogo} alt="Ignite Logo" />
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>Nova transação</button>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </HeaderContainer>
  )
}
