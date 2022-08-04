import { useCallback, useState } from 'react'

import { Farmer } from 'types/farmers'
import { SortKeys, SortOrder } from 'types/sort'
import { Results, Table, TableHead, TableBody } from './styled'
import { SortButton } from 'components'

type TableHeaders = { key: SortKeys; label: string; sortable: boolean }

type TableProps = { data: Farmer[] }

function sortData({
  tableData,
  sortKey,
  reverse,
}: {
  tableData: Farmer[]
  sortKey: SortKeys
  reverse: boolean
}) {
  if (!sortKey) return tableData

  const sortedData = tableData.sort((a, b) => {
    return a[sortKey] > b[sortKey] ? 1 : -1
  })

  if (reverse) {
    return sortedData.reverse()
  }

  return sortedData
}

function FarmerListTable({ data }: TableProps) {
  const [sortKey, setSortKey] = useState<SortKeys>('farmer_name')
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc')

  const headers: TableHeaders[] = [
    { key: 'farmer_name', label: 'Farmer Name', sortable: true },
    { key: 'city', label: 'City', sortable: false },
    { key: 'state', label: 'State', sortable: false },
    { key: 'cp_spend', label: 'Crop Protection Spend', sortable: false },
    { key: 'seed_purchases', label: 'Seed (Bags)', sortable: false },
  ]

  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === 'desc' }),
    [data, sortKey, sortOrder]
  )

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    setSortKey(key)
  }

  return (
    <>
      <Results>Results: {data.length}</Results>
      <Table>
        <TableHead>
          <tr>
            {headers.map(row => {
              return (
                <td
                  key={row.key}
                  className={row.key === 'cp_spend' ? 'crop-row' : ''}
                >
                  {row.label}{' '}
                  {row.sortable && (
                    <SortButton
                      columnKey={row.key}
                      onClick={() => changeSort(row.key)}
                      {...{
                        sortOrder,
                        sortKey,
                      }}
                    />
                  )}
                </td>
              )
            })}
          </tr>
        </TableHead>

        <TableBody>
          {sortedData().map(data => {
            const cropValue = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(data.cp_spend)

            return (
              <tr key={data.farmer_name}>
                <td>{data.farmer_name}</td>
                <td>{data.city}</td>
                <td>{data.state}</td>
                <td className="crop-value">{cropValue}</td>
                <td>{data.seed_purchases}</td>
              </tr>
            )
          })}

          {data.length === 0 && (
            <tr>
              <td colSpan={5} className="no-results">
                Sorry, no results found!
              </td>
            </tr>
          )}
        </TableBody>
      </Table>
    </>
  )
}

export default FarmerListTable
