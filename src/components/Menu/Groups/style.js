import styled from 'styled-components'
import addIcon from '../../../Assets/Images/add.svg'
import groupIcon from '../../../Assets/Images/group.png'

export const List = styled.div`
  display: flex;
  align-items: center;
  min-width: 100px;
  max-width: auto;
  height: 2.5rem;
  border-radius: 0.6rem;
  background: #f0f0f0;
  transition: 0.1s;

  &:hover {
  }
`

export const AddIcon = styled.div`
  background-image: url(${addIcon});
  background-size: cover;
  height: 2.1rem;
  width: 2.1rem;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  transition: 0.1s;
  filter: invert(51%) sepia(5%) saturate(94%) hue-rotate(62deg) brightness(88%)
    contrast(87%);

  &:hover {
    transform: scale(1.1, 1.1);
    filter: invert(50%) sepia(62%) saturate(3492%) hue-rotate(156deg)
      brightness(99%) contrast(101%);
  }
`

export const GroupIcon = styled.div`
  background-image: url(${groupIcon});
  background-size: cover;
  grid-column: 1/1;
  grid-row: 1/1;
  height: 2.3rem;
  width: 2.3rem;
  margin-left: 6px;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.1s;
  filter: invert(51%) sepia(5%) saturate(94%) hue-rotate(62deg) brightness(88%)
    contrast(87%);

  &:hover {
    transform: scale(1.1, 1.1);
    filter: invert(50%) sepia(62%) saturate(3492%) hue-rotate(156deg)
      brightness(99%) contrast(101%);
  }
`
export const DeleteGroup = styled.div`
  position: relative;
  justify-self: flex-end;
  align-self: flex-start;
  display: flex;
  grid-column: 1/1;
  grid-row: 1/1;
  width: 0.8rem;
  height: 0.8rem;
  cursor: pointer;
  background: #fc4103;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 900;
  align-items: baseline;
  color: white;

  &:hover {
    border-radius: 100%;
    background: red;
    color: white;
    transform: scale(1.2, 1.2);
  }
`
export const GroupContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`
export const Dropdown = styled.div`
  position: absolute;
  display: none;
  top: 47px;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`
export const DivContainerAddGroup = styled.div`
  &:hover {
    & > .dropdown {
      display: inline;
    }
  }
`
