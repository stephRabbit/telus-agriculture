import styled from 'styled-components'

const SortButtonStyled = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  width: 20px;
  height: 15px;
  display: inline-block;
  vertical-align: middle;

  &:before {
    content: '';
    pointer-events: none;
    width: 0;
    height: 0;
    border: solid var(--grey-dark);
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    vertical-align: text-top;
  }

  &.sort-reverse:before {
    transform: rotate(225deg);
    vertical-align: middle;
  }

  &:focus-within {
    outline: 0;
    box-shadow: 0 0 1px 1px var(--blue);
  }
`

export { SortButtonStyled }
