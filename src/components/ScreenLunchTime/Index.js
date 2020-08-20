import React from 'react'
import Card from '../utils/Card/index'
import { BodyContainer, DivBottomButtons, Button } from './Style'

const ScreenLunchTime = () => {
  return (
    <Card title='HORÁRIO DE ALMOÇO!'>
      <BodyContainer>
        <h4>Horário de almoço. Deseja encerrar a tarefa?</h4>
        <DivBottomButtons>
          <Button type='no'>Não</Button>
          <Button type='yes'>Sim</Button>
        </DivBottomButtons>
      </BodyContainer>
    </Card>
  )
}

export default ScreenLunchTime
