import { HeaderContainer, HeaderContent, NewTransationButton } from './styles';

import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <NewTransationButton>Nova transação</NewTransationButton>
      </HeaderContent>
    </HeaderContainer>
  )
}