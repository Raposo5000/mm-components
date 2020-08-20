import React from 'react'
import { AddIcon, Dropdown, DivContainerAddGroup } from './style'
import { useDispatch } from 'react-redux'
import { addGroup } from '../../../store/actions/groupActions'

const Add = () => {
  const DISPATCH_ADD_GROUP = useDispatch()
  return (
    <DivContainerAddGroup>
      <AddIcon title='Adicionar grupo' />
      <Dropdown className='dropdown'>
        <span onClick={() => DISPATCH_ADD_GROUP(addGroup('grupo 1'))}>
          grupo 1
        </span>
        <br />
        <span onClick={() => DISPATCH_ADD_GROUP(addGroup('grupo 2'))}>
          grupo 2
        </span>
        <br />
        <span onClick={() => DISPATCH_ADD_GROUP(addGroup('grupo 3'))}>
          grupo 3
        </span>
        <br />
        <span onClick={() => DISPATCH_ADD_GROUP(addGroup('grupo 4'))}>
          grupo 4
        </span>
        <br />
      </Dropdown>
    </DivContainerAddGroup>
  )
}

export default Add
