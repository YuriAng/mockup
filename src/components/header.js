import styled from "styled-components";
import Select from "./select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const Logo = styled.h1`
  display: flex;
  size: 200px;
  align-items: center;
`

const Wrapper = styled.div`
  background-color: #251c3c;
  color: white;
  min-width: 10vw;
  height: 3em;
  display: flex;
  align-items: center;
  padding: 0 20px ;
  box-shadow: 0 2px 5px black;
  justify-content: space-between;
  grid-column-start: 1;
  grid-column-end: 3;
`
const Icon = styled(FontAwesomeIcon)`
   color: white;
`
const RightStyled = styled.div`
  display: flex;
  gap: 2em;
`

 const  Header = () => {
   return(
     <Wrapper>
       <Logo>Machine Ice Company </Logo>
       <RightStyled>
         <Select leftComponent={<Icon icon={faPlus} />}   >
           <option value="">Add</option>
           <option value=""> Add </option>
         </Select>
         <Select leftComponent={<Icon icon={faBell} />}   >
           <option value="">Alert</option>
           <option value=""> Alert </option>
         </Select>
         <Select leftComponent={<Icon icon={faUserCircle} />}   >
           <option value="">Yuri Freitez </option>
           <option value="">Yuri Freitez</option>
         </Select>
       </RightStyled>
     </Wrapper>
   )
 }

 export default Header