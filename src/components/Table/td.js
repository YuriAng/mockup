import styled from "styled-components";

const TdStyled = styled.td`
  border: 1px solid #AAAAAA;
  padding: 8px 5px;
`



const Td = (props) => {
  const {children} = props
  return(
    <TdStyled>{children}</TdStyled>
  )
}

export default Td