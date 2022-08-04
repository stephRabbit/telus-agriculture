import styled from 'styled-components'

const Results = styled.div`
  margin-bottom: 8px;
`

const Table = styled.table`
  border: 1px solid var(--grey);
  border-collapse: collapse;
  text-align: left;
  text-transform: uppercase;
  width: 100%;

  td,
  th {
    padding: 7px 20px;
  }

  .crop-row,
  .crop-value {
    text-align: right;
    width: 40%;
  }
`

const TableHead = styled.thead`
  border-bottom: 1px solid var(--grey-dark);
  font-weight: 700;
  text-transform: capitalize;
`

const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid var(--grey);
    &:last-child {
      border-bottom: none;
    }
  }

  .no-results {
    font-weight: 700;
    padding: 32px 0;
    text-align: center;
    text-transform: initial;
  }
`

export { Results, Table, TableHead, TableBody }
