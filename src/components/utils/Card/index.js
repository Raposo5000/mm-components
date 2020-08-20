import React from 'react'
import { Card, Title, Container } from './style'

const index = ({ title, children }) => {
  return (
    <Container>
      <Card>
        <Title>{title}</Title>
        {children}
      </Card>
    </Container>
  )
}

export default index
