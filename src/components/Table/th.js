import styled from "styled-components";

const ThStyled = styled.th`
 font-size: 15px;
font-weight: bold;
color: #FFFFFF;
border-left: 2px solid #D0E4F5;
 padding: 8px 5px;
`

const Th = (props) => {
  const { children } = props
  return (
    <ThStyled>{children}</ThStyled>
  )
}
export default Th