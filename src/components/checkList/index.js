import React from 'react'
import { ButtonCheck, Dropdown } from './style'
import testChecklistText from './checklistText'
import returnInputs from './utils/returnInputs'

const CheckList = () => {
  const [isDropdownOpened, setIDropdownsOpened] = React.useState(false)
  const [itensChecklist, setItensChecklist] = React.useState([])
  const [checklistToSend, setChecklistToSend] = React.useState(null)

  const createItensChecklist = textChecklist => {
    const ITENS = textChecklist.trim().split('\n')
    setItensChecklist(ITENS)
    setChecklistToSend(ITENS)
  }

  const handleChangeInput = (e, index) => {
    const newStateItem = e.target.checked === false ? '-' : '+'
    const newText = `${newStateItem} ${itensChecklist[index].substring(2)}`
    const newArrayChecklist = checklistToSend.map((el, indexMap) =>
      indexMap === index ? newText : el
    )

    setChecklistToSend(newArrayChecklist)
  }

  const sendChecklist = () => {
    const formatedTextChecklist = checklistToSend.join('\\n')
    console.log(formatedTextChecklist)
    setIDropdownsOpened(false)
  }

  const returnComponentsCheckList = (itensChecklist, createItensChecklist) => {
    return itensChecklist.map((el, rowIndexText) => (
      <div key={rowIndexText}>
        {returnInputs(el, rowIndexText, handleChangeInput)}
        <br />
      </div>
    ))
  }

  const verifyAmountOfChecklist = () => {
    let max = 0
    let checked = 0
    const arrayText = testChecklistText.trim().split('\n')
    arrayText.map(el => {
      if (el[0] === '+') {
        checked = checked + 1
        max = max + 1
      } else if (el[0] === '-') {
        max = max + 1
      } else if (el[0] === '~') {
        max = max + 1
      }
    })

    return `${checked}/${max}`
  }

  return (
    <div style={{ marginLeft: '40px', marginTop: '20px' }}>
      <br />
      <ButtonCheck
        onClick={() => {
          createItensChecklist(testChecklistText)
          setIDropdownsOpened(!isDropdownOpened)
        }}
      >
        {verifyAmountOfChecklist()}
      </ButtonCheck>
      <Dropdown isOpened={isDropdownOpened}>
        {itensChecklist === [] ? '' : returnComponentsCheckList(itensChecklist)}
        <ButtonCheck onClick={() => sendChecklist()}>Salvar</ButtonCheck>
      </Dropdown>
    </div>
  )
}

export default CheckList
