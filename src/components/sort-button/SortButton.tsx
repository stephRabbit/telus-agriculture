import { SortKeys, SortOrder } from 'types/sort'
import { SortButtonStyled } from './styled'

function SortButton({
  sortOrder,
  columnKey,
  sortKey,
  onClick,
}: {
  sortOrder: SortOrder
  columnKey: SortKeys
  sortKey: SortKeys
  onClick: React.MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <SortButtonStyled
      onClick={onClick}
      className={`${
        sortKey === columnKey && sortOrder === 'desc' ? 'sort-reverse' : ''
      }`}
    ></SortButtonStyled>
  )
}

export default SortButton
