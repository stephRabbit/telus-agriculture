import styled from 'styled-components'

const CheckboxContainer = styled.label`
  align-self: flex-start;
  display: block;
  position: relative;
  padding-left: 24px;
  margin: 0 16px 12px 0;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.25;
  user-select: none;

  input {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: var(--white);
    border: 1px solid var(--blue);
  }

  input:checked ~ span {
    background-color: var(--blue);
  }

  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ span:after {
    display: block;
  }

  input:focus ~ span {
    outline: 0;
    box-shadow: 0 0 1px 1px var(--blue);
  }

  span:after {
    left: 4px;
    top: -2px;
    width: 8px;
    height: 14px;
    border: solid var(--white);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`

export { CheckboxContainer }
