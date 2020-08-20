import styled from 'styled-components'

export const BodyContainer = styled.div`
  background: #e0e0e0;
  margin: 1rem;
  padding: 1rem;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  height: 40rem;
  overflow: auto;
`
export const CardStyledComponent = styled.div`
  width: 22rem;
  height: 15rem;
  padding: 0.5rem;
  background: whitesmoke;
  box-shadow: 2px 2px 4px #a3a3a3;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'a b'
    'c d';
`
export const Status = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 100%;
  background: #25cc7c;
  grid-area: a;
`
export const Percent = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  margin: 0.4rem;
  border-radius: 100%;
  border: 3px solid red;
  grid-area: a;
`
export const TopRight = styled.div`
  display: flex;
  grid-area: b;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 10px;
`

export const BottomLeft = styled.div`
  grid-area: c;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const BottomRight = styled.div`
  grid-area: d;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
`

export const Project = styled.span`
  color: red;
  font-size: 22px;
`

export const DivTimeAndMoney = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
`
