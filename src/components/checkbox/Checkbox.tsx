import { PropsWithChildren } from 'react'

import { CheckboxContainer } from './styled'

type CheckboxProps = {
  checked: boolean
  onChange: () => void
}

function Checkbox({
  checked,
  children,
  onChange,
}: PropsWithChildren<CheckboxProps>) {
  return (
    <CheckboxContainer>
      {children}
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span aria-hidden="true" />
    </CheckboxContainer>
  )
}

export default Checkbox
