import styled from 'styled-components'

export const BodyContainer = styled.div`
  background: #e0e0e0;
  margin: 1rem;
  padding: 1rem;
  border-radius: 4px;
  height: auto;
  width: 25rem;
`
export const DivBottomButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;
`
export const Button = styled.button`
  margin-left: 1rem;
  padding: 0.6rem 1.2rem;
  color: black;
  font-size: 0.9rem;
  font-weight: bold;
  border: solid 2px ${props => (props.type === 'yes' ? '#1ac773' : '#d95555')};
  color: whitesmoke;
  border-radius: 0.2rem;
  background: ${props => (props.type === 'yes' ? '#1ac773' : '#d95555')};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #ededed;
    color: ${props => (props.type === 'yes' ? '#1ac773' : '#d95555')};
    /* opacity: 0.7; */
  }
`
