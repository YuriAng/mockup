import styled from "styled-components";


const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 15px;
  min-height: 5em;
  padding: 2em;
  box-shadow: 0 2px 5px black;
  background-color: white;
  ${
    ({ color }) => `
    color: ${color};
    `
  }

`
const FirstColumn = styled.span`
  grid-column-start: 1;
  grid-column-end: 2;
`
const SecondColumn = styled.span`
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  flex-direction: column;
`

const EstimateEstatus = (props) => {
  const { leftIcon, children, number, color } = props
  return(
    <div>
      <ButtonStyled color={color}>
        <FirstColumn>{leftIcon}</FirstColumn>
        <SecondColumn>
          <span>{number}</span>
          <span>{children}</span>
        </SecondColumn>
      </ButtonStyled>
    </div>
  )
}

export default EstimateEstatus