import styled from 'styled-components'

export const ButtonCheck = styled.button`
  background-color: #4a6db0;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 19px;
  border: none;
  border-radius: 5px;
  outline: 0;
  box-shadow: 1px 2px 5px black;
  color: white;
  font-weight: bold;
`
export const Dropdown = styled.div`
  position: relative;
  display: ${({ isOpened }) => (isOpened === false ? 'none' : 'flex')};
  top: 0px;
  background-color: #f9f9f9;
  width: 16rem;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;

  flex-direction: column;
`
export const Input = styled.input`
  cursor: pointer;
  border: solid 2px black;
  width: 15px;
  height: 15px;
  background-color: #e9e9e9;
`

export const DivChecklistSelector = styled.div`
  display: flex;
`
