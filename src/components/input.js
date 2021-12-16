import styled from "styled-components";

const InputStyled = styled.input `
  border: none;
  outline: none;
`
const WrapperInput = styled.div`
  border: 1px solid #251c3c;
  border-radius: 5px;
  padding: 0em 2em 0 0 ;
  margin-top: 1em;
`

const Input = (props) => {
  const { placeholder, iconLeft } = props
  return(
    <WrapperInput>
      {iconLeft}
      <InputStyled placeholder={placeholder}></InputStyled>

    </WrapperInput>
  )
}

export default Input