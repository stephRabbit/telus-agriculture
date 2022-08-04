import styled from 'styled-components'

const SearchHeader = styled.header`
  display: flex;
  margin: 0 auto 23px;
  max-width: 1229px;
  width: 100%;
  height: 32px;
`

const SelectContainer = styled.div`
  align-self: flex-start;
  position: relative;
  width: fit-content;

  &:before {
    content: '';
    pointer-events: none;
    position: absolute;
    top: 50%;
    margin-top: -6px;
    right: 10px;
    width: 0;
    height: 0;
    border: solid var(--blue);
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
  }
`

const Select = styled.select`
  appearance: none;
  border: 1px solid var(--grey-medium);
  padding: 7px 10px;
  display: flex;
  height: 32px;
  background-color: var(--white);
  cursor: pointer;
  appearance: none;
  color: var(--grey-lighter);

  &:focus {
    outline: 0;
    box-shadow: 0 0 1px 1px var(--blue);
  }

  option {
    color: var(--grey-text) !important;
  }
`

const SearchBoxContainer = styled.div`
  align-self: flex-start;
  display: flex;
  position: relative;
  min-width: 240px;

  input {
    width: 100%;
    &:focus {
      outline: 0;
      box-shadow: 0 0 1px 1px var(--blue);
    }
  }

  svg {
    position: absolute;
    right: 5px;
    top: 7px;
    pointer-events: none;
  }
`
const SearchBox = styled.input`
  border: 1px solid var(--grey-medium);
  border-radius: 0;
  height: 32px;
  padding: 0 32px 0 10px;
`

const Spacer = styled.div`
  height: 32px;
  width: 0;
  border: 0.5px solid var(--grey-light);
  margin: 0 16px;
`

export {
  SearchHeader,
  SelectContainer,
  Select,
  SearchBoxContainer,
  SearchBox,
  Spacer,
}
