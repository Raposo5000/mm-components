import React from 'react'
import { TextareaComponent, BodyContainerStyle, ButtonSend } from './style'

const BodyContainer = () => {
  const [description, setDescription] = React.useState('')
  const handleTextAreaChange = e => setDescription(e.target.value)
  const showDescription = () => {
    const text = description.split('\n').join('\\n')
    alert(text)
  }

  return (
    <div>
      <BodyContainerStyle>
        <TextareaComponent
          placeholder='Insira um comentário sobre a tarefa (opcional)...'
          onChange={handleTextAreaChange}
        />
        <ButtonSend onClick={() => showDescription()}>ENVIAR</ButtonSend>
      </BodyContainerStyle>
    </div>
  )
}

export default BodyContainer
