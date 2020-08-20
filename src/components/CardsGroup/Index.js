import React from 'react'
import Card from '../utils/Card/index'
import { BodyContainer } from './Style'
import CardComponent from './CardComponent'
import users from './jsonUsers'

const Index = () => {
  return (
    <Card title='GRUPOS'>
      <BodyContainer>
        {users.map((el, index) => (
          <CardComponent key={index} infsUserObj={el} />
        ))}
      </BodyContainer>
    </Card>
  )
}

export default Index
