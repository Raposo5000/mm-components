import React from 'react'
import {
  DivContainer,
  Logo,
  DivContainerMain,
  SpanServerOff,
  SpanTextServerOff,
  DivText
} from './style'
import './css.css'

const Index = () => {
  React.useEffect(() => {
    setInterval(() => console.log('Redireciona para outra página'), 5000)
  }, [])

  return (
    <DivContainer>
      {/* <CardContainer>
        <SpanServerOff>O SERVIDOR ESTÁ OFFLINE...</SpanServerOff>
      </CardContainer> */}
      <DivContainerMain>
        <Logo src='https://icon-icons.com/icons2/1659/PNG/256/3844447-cloud-computing-data-disable-off-server-unavailable_110297.png' />
        <DivText>
          <SpanServerOff className='serverOff'>SERVIDOR OFFLINE...😢</SpanServerOff>
          <hr style={{ width: '-webkit-fill-available' }} />
          <SpanTextServerOff className='serverOffText'>
            O servidor do Money Maker está offline no momento, estamos
            trabalhando para consertar o problema. Por favor, aguarde...
          </SpanTextServerOff>
        </DivText>
      </DivContainerMain>
    </DivContainer>
  )
}

export default Index
