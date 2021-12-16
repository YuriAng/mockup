import styled from "styled-components";

const TrStyled = styled.tr`
  border: 1px solid violet;

:nth-child(even) {
  background #D0E4F5;
}
`

const Tr = (props) => {
  const { children } = props
  return(
    <TrStyled>{ children }</TrStyled>
  )
}
export default Tr