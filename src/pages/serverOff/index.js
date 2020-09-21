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
        <Logo src='data:image/png;base64,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' />
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
