import React from 'react'
import { BodyStyleComponent } from './style'
import Input from './Input'

const BodyCard = () => {
  const VALUES1 = ['11:00', '11:30', '12:00', '12:30', '13:00']
  const VALUES2 = ['17:00', '18:00']

  return (
    <BodyStyleComponent>
      <Input
        title='Horário de almoço'
        values={VALUES1}
        localStorageKey='horario_almoco'
      />
      <Input
        title='Fim do expediente'
        values={VALUES2}
        localStorageKey='horario_saida'
      />
    </BodyStyleComponent>
  )
}

export default BodyCard
