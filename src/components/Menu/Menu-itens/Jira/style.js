import styled from 'styled-components'
import JiraLogo from '../../../../Assets/Images/jiralogo.png'

export const JiraIcon = styled.div`
  background-image: url(${JiraLogo});
  background-size: cover;
  height: 2.5rem;
  width: 2.5rem;
  margin-right: 0.7rem;
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    filter: invert(50%) sepia(62%) saturate(3492%) hue-rotate(156deg)
      brightness(99%) contrast(101%);
    transform: scale(1.2, 1.2);
  }
`
