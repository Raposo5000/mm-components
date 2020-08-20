import React from 'react'
import { ButtonCheck, Dropdown } from './style'
import testChecklistText from './checklistText'
import returnComponentsCheckList from './utils/returnItensChecklist'

const CheckList = () => {
  const [isOpened, setIsOpened] = React.useState(false)
  const [itensChecklist, setItensChecklist] = React.useState([])

  const createItensChecklist = textChecklist => {
    const ITENS = textChecklist.trim().split('\n')
    setItensChecklist(ITENS)
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
      </Dropdown>
    </div>
  )
}

export default CheckList
