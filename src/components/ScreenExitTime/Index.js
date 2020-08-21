import React from 'react'
import Card from '../utils/Card/index'
import { BodyContainer, DivBottomButtons, Button } from './Style'

const ScreenExitTime = () => {
  return (
    <Card title='FIM DO EXPEDIENTE!'>
      <BodyContainer>
        <h4>FIM DO EXPEDIENTE, DESEJA ENCERRAR A TAREFA?</h4>
        <DivBottomButtons>
          <Button type='no'>NÃO</Button>
          <Button type='yes'>SIM</Button>
        </DivBottomButtons>
      </BodyContainer>
    </Card>
  )
}

export default ScreenExitTime
