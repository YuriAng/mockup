import styled from 'styled-components';

const StyledH2 = styled.h2`
  box-shadow: 1px  2px 5px #302c2c;
  padding: 20px 25px;
  margin: 20px 0;
`

const Title = (props) => {
  const { children } = props
  return (
    <StyledH2>{children}</StyledH2>
  )
}
export default Title