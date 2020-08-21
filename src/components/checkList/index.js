import React from 'react'
import {
  ButtonCheck,
  Dropdown
} from './style'
import testChecklistText from './checklistText'
import returnInputs from './utils/returnInputs'

const CheckList = () => {
  const [isOpened, setIsOpened] = React.useState(false)
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
    setIsOpened(false)
  }

  const returnComponentsCheckList = (itensChecklist, createItensChecklist) => {
    return itensChecklist.map((el, rowIndexText) => (
      <div key={rowIndexText}>
        {returnInputs(el, rowIndexText, handleChangeInput)}
        <br />
      </div>
    ))
  }

  return (
    <div style={{ marginLeft: '40px', marginTop: '20px' }}>
      <br />
      <ButtonCheck
        onClick={() => {
          createItensChecklist(testChecklistText)
          setIsOpened(!isOpened)
        }}
      >
        1/5
      </ButtonCheck>
      <Dropdown isOpened={isOpened}>
        {itensChecklist === [] ? '' : returnComponentsCheckList(itensChecklist)}
        <button onClick={() => sendChecklist()}>Salvar</button>
      </Dropdown>
    </div>
  )
}

export default CheckList
