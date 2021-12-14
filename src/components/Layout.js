import styled from 'styled-components'
import Header from './header'
import Sidebar from './sidebar'

const LayoutStyled = styled.div`
  display: grid;
  grid-template-columns: 15em 1fr;
  grid-template-rows: 3em 1fr;
`


const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Header />
      <Sidebar />
      <main>
        {children}
      </main>
    </LayoutStyled>
  )
}

export default Layout;
