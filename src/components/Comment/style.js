import styled from 'styled-components'

export const TextareaComponent = styled.textarea`
  width: 100%;
  height: 230px;
  resize: none;
  outline: 0;
`

export const BodyContainerStyle = styled.div`
  background: #e6e6e6;
  padding: 20px;
  margin: 20px;
`
export const ButtonSend = styled.button`
  background-color: #ededed;
  margin-top: 1rem;
  padding: 0.4rem;
  font-size: 16px;
  border: solid 2px #5786de;
  border-radius: 5px;
  outline: 0;
  color: #5786de;
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    color: white;
    background-color: #5786de;
  }
`
