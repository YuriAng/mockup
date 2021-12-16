import styled from "styled-components";

const FilterStyled = styled.select`
  border: 1px solid #251c3c;
  border-radius: 5px;
  padding: 0 2.5em;
  //margin-left: 2em;
  margin-top: 1em;
`

const SelectFilter = (props) => {
  const { children } = props
  return(
    <FilterStyled>{children}</FilterStyled>
  )
}

export default SelectFilter