import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import OutsideClickerInterceptor from '../components/outsideClickerInterceptor'

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  text-align: center;
  padding: 1rem;
  padding-top: 3rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
  z-index: 9;

  @media (max-width: ${({ theme }) => theme.deviceSizes.mobileXL}) {
    width: 100%;
  }

  a {
    font-size: 1.6rem;
    padding: 1rem 0;
    color: #000;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.deviceSizes.mobileXL}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.linkHoverColor};
    }
  }
`

const MenuLink = styled(Link)`
  color: #000;
  font-size: 1.8rem;

  &:hover {
    color: ${({ theme }) => theme.linkHoverColor};
  }
`

const Menu = ({ burgerRef, open, setOpen }: { burgerRef: any; open: boolean; setOpen: (open: boolean) => void }) => {
  return (
    <OutsideClickerInterceptor exceptionRef={burgerRef} enabled={open} onIntercept={() => setOpen(false)}>
      <StyledMenu open={open} onClick={() => setOpen(!open)}>
        <MenuLink to="/">Accueil</MenuLink>
        <MenuLink to="/faq">FAQ</MenuLink>
      </StyledMenu>
    </OutsideClickerInterceptor>
  )
}
export default Menu
