import styled from "styled-components";

const TableStyled = styled.table`
  border: 1px solid #1C6EA4;
  background-color: #EEEEEE;
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`

const Table = (props) => {
  const { children } = props
  return(
    <TableStyled>
      {children}
    </TableStyled>
  )
}

export default Table