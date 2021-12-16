import styled from "styled-components";

const TheadStyled = styled.thead`
background: #1C6EA4;
background: -moz-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
background: -webkit-linear-gradient(top, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
background: linear-gradient(to bottom, #5592bb 0%, #327cad 66%, #1C6EA4 100%);
border-bottom: 2px solid #444444;
`

const Thead = (props) => {
  const { children } = props
  return(
    <TheadStyled>{children}</TheadStyled>
  )
}

export default Thead