import React from 'react'
import {
  CardStyledComponent,
  Status,
  Percent,
  Project,
  TopRight,
  DivTimeAndMoney,
  BottomLeft,
  BottomRight
} from './Style'

const CardComponent = ({ infsUserObj }) => {
  const {
    online,
    project,
    sprint,
    summary,
    duedate,
    timeleft,
    money,
    sprintEndDate,
    issueOriginalEstimate,
    issueOriginalMoney
  } = infsUserObj

  return (
    <CardStyledComponent>
      <Status title={online} />
      <Percent />
      <TopRight>
        <Project>{project}</Project>
        <DivTimeAndMoney>
          <span>{issueOriginalEstimate}</span>
          <span>{issueOriginalMoney}</span>
          <span>{timeleft}</span>
          <span>{money}</span>
        </DivTimeAndMoney>
      </TopRight>
      <BottomLeft>
        <span>{summary}</span>
        <span>{sprint}</span>
      </BottomLeft>
      <BottomRight>
        <span>{duedate}</span>
        <span>{sprintEndDate}</span>
      </BottomRight>
    </CardStyledComponent>
  )
}

export default CardComponent
