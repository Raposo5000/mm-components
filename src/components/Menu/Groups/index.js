import React from 'react'
import { List } from './style'
import GroupIcon from './group'
import { useSelector } from 'react-redux'
import Add from './AddIcon'

const Index = () => {
  const LIST_GROUPS = useSelector(state => state.group.groups)

  return (
    <div>
      <List>
        {LIST_GROUPS.map((el, index) => (
          <GroupIcon title={`grupo ${index}`} key={index} index={index} />
        ))}
        <Add />
      </List>
    </div>
  )
}

export default Index
