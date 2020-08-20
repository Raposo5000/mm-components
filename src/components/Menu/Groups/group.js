import React from 'react'
import { GroupIcon, DeleteGroup, GroupContainer } from './style'
import { useDispatch } from 'react-redux'
import { removeGroup } from '../../../store/actions/groupActions'

const Group = ({ title, index }) => {
  const DISPATCH_REMOVE_GROUP = useDispatch()

  return (
    <GroupContainer>
      <GroupIcon title={title} />
      <DeleteGroup
        title='Deletar grupo'
        onClick={() => DISPATCH_REMOVE_GROUP(removeGroup(index))}
      >
        x
      </DeleteGroup>
    </GroupContainer>
  )
}

export default Group
