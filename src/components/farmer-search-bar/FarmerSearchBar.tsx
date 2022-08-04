import { BiSearch } from 'react-icons/bi'

import {
  SearchHeader,
  SelectContainer,
  Select,
  SearchBoxContainer,
  SearchBox,
  Spacer,
} from './styled'
import { Checkbox } from 'components'
import { states } from 'utils/states'

type SearchBarProps = {
  hasCropProtection: boolean
  hasSeed: boolean
  onStateChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  searchTerm: string
  setHasCropProtection: (value: React.SetStateAction<boolean>) => void
  setHasSeed: (value: React.SetStateAction<boolean>) => void
}

function FarmerSearchBar({
  hasCropProtection,
  hasSeed,
  onSearchChange,
  onStateChange,
  searchTerm,
  setHasCropProtection,
  setHasSeed,
}: SearchBarProps) {
  return (
    <SearchHeader>
      <SelectContainer>
        <Select name="state" onChange={onStateChange}>
          <option value="" defaultValue="selected">
            State
          </option>
          {states.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </Select>
      </SelectContainer>
      <Spacer />
      <SearchBoxContainer>
        <BiSearch size={20} />
        <SearchBox
          type="text"
          onChange={onSearchChange}
          value={searchTerm}
          placeholder="Name, City"
        />
      </SearchBoxContainer>
      <Spacer />
      <Checkbox
        checked={hasCropProtection}
        onChange={() => setHasCropProtection(!hasCropProtection)}
      >
        Has Crop Protection
        <br />
        Purchases
      </Checkbox>
      <Checkbox checked={hasSeed} onChange={() => setHasSeed(!hasSeed)}>
        Has Seed
        <br />
        Purchases
      </Checkbox>
    </SearchHeader>
  )
}

export default FarmerSearchBar
