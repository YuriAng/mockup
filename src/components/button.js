import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #0d6fe9;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 0.5em 2.5em;
  margin-top: 1em;
`

const Button = (props) => {
  const { children, iconLeft } = props
  return(
    <div>

      <ButtonStyled>{iconLeft}{children}</ButtonStyled>
    </div>
  )
}

export default Button