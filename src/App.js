import Layout from './components/Layout';
import styled from 'styled-components';
import Button from './components/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPaperPlane, faThumbsUp, faBan } from '@fortawesome/free-solid-svg-icons'

const Icon = styled(FontAwesomeIcon)`
   padding: 0 10px ;
${
  ({ color }) => `
  color: ${color};
  `
}
`
const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 20px;
  margin-top: 30px;
`
const StyledH2 = styled.h2`
  box-shadow: 10px  5px 5px #302c2c;
  padding: 20px 25px;
  margin: 20px 0;
`

const App = () => {
  return (
    <Layout>
      <StyledH2>Estimate</StyledH2>
      <ButtonWrapper>
        <Button leftIcon={<Icon icon={faEdit} color='#4797e9' />} number="1" color="#4797e9"> Draft</Button>
        <Button leftIcon={<Icon icon={faPaperPlane} color='#fb3415' />} number="20" color='#fb3415'> Sent</Button>
        <Button leftIcon={<Icon icon={faThumbsUp} color="#4cad24" />} number="10" color="#4cad24">Aproved</Button>
        <Button leftIcon={<Icon icon={faBan} color="#ed2d3f" />} number="15" color="#ed2d3f">Rejected</Button>
        <Button number="46" color="#6a6464" >Total</Button>
      </ButtonWrapper>
    </Layout>
  )
}

export default App;
