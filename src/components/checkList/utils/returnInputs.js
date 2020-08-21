import {
  DivChecklistSelector,
  Input,
  SpanInProgress,
  SpanSkiped,
  UlAdditional
} from '../style'
import React from 'react'

const returnInputs = (text, index, handleChangeInput) => {
  const firstCharacter = text

  switch (firstCharacter[0]) {
    case '#': // Header
      return <h3>{text.substring(2)}</h3>
    case '-': // ToDo Item
      return (
        <DivChecklistSelector>
          <Input
            type='checkbox'
            id={`${index}input`}
            onChange={e => handleChangeInput(e, index)}
          />
          <label htmlFor={`${index}input`}> {text.substring(2)}</label>
        </DivChecklistSelector>
      )
    case '~': // In Progress
      return (
        <DivChecklistSelector>
          <Input
            type='checkbox'
            id={`${index}input`}
            onChange={e => handleChangeInput(e, index)}
          />
          <label htmlFor={`${index}input`}>
            <SpanInProgress>EM PROGRESSO</SpanInProgress> {text.substring(2)}
          </label>
        </DivChecklistSelector>
      )
    case '+': // Done Item
      return (
        <DivChecklistSelector>
          <Input
            type='checkbox'
            defaultChecked
            id={`${index}input`}
            onChange={e => handleChangeInput(e, index)}
          />
          <label htmlFor={`${index}input`}>
            {' '}
            <strike>{text.substring(2)}</strike>
          </label>
        </DivChecklistSelector>
      )
    case 'x': // Skiped
      return (
        <DivChecklistSelector>
          <Input
            type='checkbox'
            disabled
            id={`${index}input`}
            onChange={e => handleChangeInput(e, index)}
          />
          <label htmlFor={`${index}input`}>
            {' '}
            <SpanSkiped>{text.substring(2)}</SpanSkiped>
          </label>
        </DivChecklistSelector>
      )
    case '>': // Aditional
      return (
        <DivChecklistSelector>
          <UlAdditional>
            <li>
              <label htmlFor={`${index}input`}> {text.substring(2)}</label>
            </li>
          </UlAdditional>
        </DivChecklistSelector>
      )
    default:
      break
  }
}

export default returnInputs
