import styled from 'styled-components'

export const DivContainer = styled.div`
  background: linear-gradient(95deg, #00aecb, #1a78b0);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CardContainer = styled.div`
  width: 30vw;
  height: 50vh;
  background: white;
  border-radius: 0.6rem;
  box-shadow: 1px 2px 10px #545454;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 60vw;
  }
`

// export const SpanServerOff = styled.span`
//   color: #ff0000;
//   font-size: 1.7rem;
//   text-align: center;
// `

export const DivContainerMain = styled.div`
  width: 70vw;
  display: grid;
  grid-template-columns: 2fr 8fr;
  grid-template-areas: 'a1 a2';
  @media screen and (max-width: 888px) {
    width: 90vw;
    grid-template-columns: 1fr;
  }
`
export const Logo = styled.img`
  grid-area: a1;
  filter: invert(100%) sepia(1%) saturate(41%) hue-rotate(229deg)
    brightness(116%) contrast(100%);
  width: 350px;
  @media screen and (max-width: 1277px) {
    width: 200px;
  }

  @media screen and (max-width: 888px) {
    display: none;
  }
`

export const DivText = styled.div`
  margin-left: 2rem;
  grid-area: a2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 888px) {
    grid-area: a1;
  }
`

export const SpanServerOff = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  font-size: 3rem;
`
export const SpanTextServerOff = styled.span`
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`
