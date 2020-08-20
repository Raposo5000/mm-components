import React from 'react'
import {
  Input,
  DivChecklistSelector,
  SpanInProgress,
  SpanSkiped,
  UlAdditional
} from '../style'

const VERIFY_FIRST_ELEMENT_ROW_CHECKLIST = (text, index) => {
  const firstCharacter = text

  switch (firstCharacter[0]) {
    case '#': // Header
      return <h3>{text.substring(2)}</h3>
    case '-': // ToDo Item
      return (
        <DivChecklistSelector>
          <Input type='checkbox' id={`${index}input`} />
          <label for={`${index}input`}> {text.substring(2)}</label>
        </DivChecklistSelector>
      )
    case '~': // In Progress
      return (
        <DivChecklistSelector>
          <Input type='checkbox' id={`${index}input`} />
          <label for={`${index}input`}>
            <SpanInProgress>EM PROGRESSO</SpanInProgress> {text.substring(2)}
          </label>
        </DivChecklistSelector>
      )
    case '+': // Done Item
      return (
        <DivChecklistSelector>
          <Input type='checkbox' defaultChecked id={`${index}input`} />
          <label for={`${index}input`}>
            {' '}
            <strike>{text.substring(2)}</strike>
          </label>
        </DivChecklistSelector>
      )
    case 'x': // Skiped
      return (
        <DivChecklistSelector>
          <Input type='checkbox' disabled id={`${index}input`} />
          <label for={`${index}input`}>
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
              <label for={`${index}input`}> {text.substring(2)}</label>
            </li>
          </UlAdditional>
        </DivChecklistSelector>
      )
    default:
      break
  }
}

const returnComponentsCheckList = itensChecklist => {
  return itensChecklist.map((el, index) => (
    <div key={index}>
      {VERIFY_FIRST_ELEMENT_ROW_CHECKLIST(el, index)}
      <br />
    </div>
  ))
}

export default returnComponentsCheckList
