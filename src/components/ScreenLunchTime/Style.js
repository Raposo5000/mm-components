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
  justify-content: end;
`
export const Button = styled.button`
  margin-left: 1rem;
  padding: 0.4rem 1.2rem;
  color: black;
  border: none;
  background: ${(props) => props.type === 'yes' ? '#1ac773' : '#d95555'};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.7;
  }
`
