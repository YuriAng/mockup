import EstimateEstatus from '../components/estimateEstatus';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPaperPlane, faThumbsUp, faBan, faPlusSquare, faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from "../components/button"
import SelectFilter from '../components/selectFilter';
import Input from '../components/input'
import Table from '../components/Table/table'
import Tr from '../components/Table/tr'
import Thead from '../components/Table/thead'
import Th from '../components/Table/th'
import Td from '../components/Table/td'
import Tbody from '../components/Table/tbody'
import Title from '../components/title'

const Icon = styled(FontAwesomeIcon)`
   padding: 0 10px ;
${({ color }) => `
  color: ${color};
  `
  }
`
const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
`

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
margin-bottom: 21px;
margin-top: 10px;
`

const FilterFirst = styled.div`
  display: flex;
`

const Tfoot = styled.div`
font-size: 14px;
font-weight: bold;
color: #FFFFFF;
text-align: right;
margin-top: 10px;
`

const AStyled = styled.a`
display: inline-block;
background: #1C6EA4;
color: #FFFFFF;
padding: 2px 8px;
border-radius: 5px;
text-decoration: none;
margin-left: 5px;
`

const Estimate = () =>{
  return(
    <div>
      <Title>Estimate</Title>
      <ButtonWrapper>
        <EstimateEstatus leftIcon={<Icon icon={faEdit} color='#4797e9' />} number="1" color="#4797e9"> Draft</EstimateEstatus>
        <EstimateEstatus leftIcon={<Icon icon={faPaperPlane} color='#fb3415' />} number="20" color='#fb3415'> Sent</EstimateEstatus>
        <EstimateEstatus leftIcon={<Icon icon={faThumbsUp} color="#4cad24" />} number="10" color="#4cad24">Aproved</EstimateEstatus>
        <EstimateEstatus leftIcon={<Icon icon={faBan} color="#ed2d3f" />} number="15" color="#ed2d3f">Rejected</EstimateEstatus>
        <EstimateEstatus number="46" color="#6a6464" >Total</EstimateEstatus>
      </ButtonWrapper>
      <FilterWrapper>
        <FilterFirst>
          <Button iconLeft={<Icon icon={faPlusSquare} color='white' />}>Add Estimate</Button>
          <SelectFilter>
            <option value="">Filter: Show All</option>
            <option value="">Filter: Show All</option>
            <option value="">Filter: Show All</option>
          </SelectFilter>
        </FilterFirst>
        <Input iconLeft={< Icon icon={faSearch} color='grey' />} placeholder='Estimate # or Customer' />
      </FilterWrapper>
      <Table>
        <Thead>
          <Tr>
            <Th>Estimate #</Th>
            <Th>Customer</Th>
            <Th>Isued Date</Th>
            <Th>Aproved Total</Th>
            <Th>Job</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>5671</Td>
            <Td>Intramark</Td>
            <Td></Td>
            <Td>16-05-2021</Td>
            <Td>0</Td>
            <Td>Draft</Td>
          </Tr>
          <Tr>
            <Td>5671</Td>
            <Td>Intramark</Td>
            <Td></Td>
            <Td>16-05-2021</Td>
            <Td>0</Td>
            <Td>Draft</Td>
          </Tr>
          <Tr>
            <Td>5671</Td>
            <Td>Intramark</Td>
            <Td></Td>
            <Td>16-05-2021</Td>
            <Td>0</Td>
            <Td>Draft</Td>
          </Tr>
          <Tr>
            <Td>5671</Td>
            <Td>Intramark</Td>
            <Td></Td>
            <Td>16-05-2021</Td>
            <Td>0</Td>
            <Td>Draft</Td>
          </Tr>
          <Tr>
            <Td>5671</Td>
            <Td>Intramark</Td>
            <Td></Td>
            <Td>16-05-2021</Td>
            <Td>0</Td>
            <Td>Draft</Td>
          </Tr>
          <Tr>
            <Td>5671</Td>
            <Td>Intramark</Td>
            <Td></Td>
            <Td>16-05-2021</Td>
            <Td>0</Td>
            <Td>Draft</Td>
          </Tr>
          <Tr>
            <Td>5671</Td>
            <Td>Intramark</Td>
            <Td></Td>
            <Td>16-05-2021</Td>
            <Td>0</Td>
            <Td>Draft</Td>
          </Tr>
          <Tr>
            <Td>5671</Td>
            <Td>Intramark</Td>
            <Td></Td>
            <Td>16-05-2021</Td>
            <Td>0</Td>
            <Td>Draft</Td>
          </Tr>
          <Tr>
            <Td>5671</Td>
            <Td>Intramark</Td>
            <Td></Td>
            <Td>16-05-2021</Td>
            <Td>0</Td>
            <Td>Draft</Td>
          </Tr>
          <Tr>
            <Td>5671</Td>
            <Td>Intramark</Td>
            <Td></Td>
            <Td>16-05-2021</Td>
            <Td>0</Td>
            <Td>Draft</Td>
          </Tr>
        </Tbody>
      </Table>
      <Tfoot >
        <div class="links">
          <AStyled href="#">&laquo;</AStyled>
          <AStyled class="active" href="#">1</AStyled>
          <AStyled href="#">2</AStyled>
          <AStyled href="#">3</AStyled>
          <AStyled href="#">4</AStyled>
          <AStyled href="#">&raquo;</AStyled>
        </div>
      </Tfoot>
    </div>

  )
}

export default Estimate