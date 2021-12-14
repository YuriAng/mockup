import styled from "styled-components";

const SelectStyled = styled.select`
  background-color: #251c3c;
  color: white;
  border: none;
  outline: none;
  :active {
    border: none;
  }
`

const Select = (props) => {
 const { leftComponent, children } = props
  return(
    <div>
      {leftComponent}
    <SelectStyled >
        {children}
    </SelectStyled>
    </div>

  )
}

export default Select