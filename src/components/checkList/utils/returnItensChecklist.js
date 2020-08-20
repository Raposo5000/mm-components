import React from 'react'
import { Input, DivChecklistSelector } from '../style'

const VERIFY_FIRST_ELEMENT_ROW_CHECKLIST = (text, index) => {
  const firstCharacter = text

  switch (firstCharacter[0]) {
    case '#':
      return <h3>{text.substring(2)}</h3>
    case '-':
      return <DivChecklistSelector><Input type='checkbox' id={`${index}input`} /><label for={`${index}input`}> {text.substring(2)}</label></DivChecklistSelector>
    case '~':
      return <DivChecklistSelector><Input type='checkbox' id={`${index}input`} /><label for={`${index}input`}> {text.substring(2)}</label></DivChecklistSelector>
    case '+':
      return <DivChecklistSelector><Input type='checkbox' id={`${index}input`} /><label for={`${index}input`}> {text.substring(2)}</label></DivChecklistSelector>
    case 'x':
      return <DivChecklistSelector><Input type='checkbox' id={`${index}input`} /><label for={`${index}input`}> {text.substring(2)}</label></DivChecklistSelector>
    case '>':
      return <DivChecklistSelector><Input type='checkbox' id={`${index}input`} /><label for={`${index}input`}> {text.substring(2)}</label></DivChecklistSelector>
    default:
      break
  }
}

const returnComponentsCheckList = (itensChecklist) => {
  return itensChecklist.map((el, index) => (
    <div key={index}>
      {VERIFY_FIRST_ELEMENT_ROW_CHECKLIST(el, index)}
      <br />
    </div>
  ))
}

export default returnComponentsCheckList
