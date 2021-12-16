import styled from "styled-components";

const TbodyStyled = styled.tbody`
font-size: 13px;
`

const Tbody = (props) => {
  const { children } = props
  return (
    <TbodyStyled>{children}</TbodyStyled>
  )
}

export default Tbody