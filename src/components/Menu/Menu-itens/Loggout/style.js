import styled from 'styled-components'
import logoutLogo from '../../../../Assets/Images/logout.png'

export const LogoutIcon = styled.div`
  background-image: url(${logoutLogo});
  background-size: cover;
  height: 2.5rem;
  width: 2.5rem;
  margin-right: 0.7rem;
  filter: invert(51%) sepia(5%) saturate(94%) hue-rotate(62deg) brightness(88%)
    contrast(87%);
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    filter: invert(50%) sepia(62%) saturate(3492%) hue-rotate(156deg)
      brightness(99%) contrast(101%);
    transform: scale(1.2, 1.2);
  }
`
