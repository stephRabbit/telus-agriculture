import { useEffect, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'

import { getFarmers } from 'api/farmers'

import { FarmerSearchBar, FarmerListTable } from 'components'
import { Farmer } from 'types/farmers'

const Container = styled.div`
  margin: 62px auto 0;
  max-width: 1229px;
`

function App() {
  const shouldMakeCall = useRef(true)
  const [data, setData] = useState<Farmer[] | []>([])
  const [state, setState] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [hasCropProtection, setHasCropProtection] = useState(false)
  const [hasSeed, setHasSeed] = useState(false)

  useEffect(() => {
    if (shouldMakeCall.current) {
      shouldMakeCall.current = false
      ;(async () => {
        const farmers = await getFarmers()
        setData(farmers)
      })()
    }
  }, [])

  function applyFilters() {
    if (!state && !searchTerm && !hasCropProtection && !hasSeed) {
      return data
    }

    let filterData = data

    if (state) {
      filterData = data.filter(farmer => farmer.state === state)
    }

    if (searchTerm) {
      filterData = data.filter(
        farmer =>
          (farmer.state === state || state === '') &&
          (farmer.farmer_name
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
            farmer.city.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    if (hasCropProtection) {
      filterData = filterData.filter(farmer => farmer.cp_spend)
    }

    if (hasSeed) {
      filterData = filterData.filter(farmer => farmer.seed_purchases)
    }

    return filterData
  }

  function onStateChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const stateValue = e.target.value
    setState(stateValue)
  }

  function onSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const search = e.target.value
    setSearchTerm(search)
  }

  const filteredData = useMemo(applyFilters, [
    data,
    state,
    searchTerm,
    hasCropProtection,
    hasSeed,
  ])

  return (
    <Container>
      <FarmerSearchBar
        onStateChange={onStateChange}
        onSearchChange={onSearchChange}
        searchTerm={searchTerm}
        hasCropProtection={hasCropProtection}
        setHasCropProtection={setHasCropProtection}
        hasSeed={hasSeed}
        setHasSeed={setHasSeed}
      />
      <FarmerListTable data={filteredData} />
    </Container>
  )
}

export default App
