import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from './header'
import Sidebar from './sidebar'

const LayoutStyled = styled.div`
  display: grid;
  grid-template-rows: 3em 1fr;
  ${({isOpen}) => `
    grid-template-columns: ${!isOpen ? "4em 1fr" : "15em 1fr"};
    transition: ${!isOpen ? " 1s ease" : " 1s ease" };
  `}
`

const MainStyled = styled.div`
  padding: 50px;
`

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <LayoutStyled isOpen={isOpen}>
      <Header />
      <Sidebar isOpen={isOpen}  setIsOpen={setIsOpen} />
      <MainStyled>
        <Outlet />
      </MainStyled>
    </LayoutStyled>
  )
}

export default Layout;
