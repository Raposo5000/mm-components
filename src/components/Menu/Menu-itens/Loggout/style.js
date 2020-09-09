import styled from 'styled-components'
import logoutLogo from '../../../../Assets/Images/logout.png'

export const LogoutIcon = styled.div`
  background-image: url(${logoutLogo});
  background-size: cover;
  height: 2.5rem;
  width: 2.5rem;
  margin-right: 0.7rem;
  margin-left: 0.7rem;
  filter: invert(42%) sepia(66%) saturate(6383%) hue-rotate(342deg) brightness(128%) contrast(99%);
  transition: 0.1s;
  cursor: pointer;
  transform: rotateY(150deg);

  &:hover {
    filter: invert(12%) sepia(93%) saturate(7493%) hue-rotate(357deg)
      brightness(93%) contrast(116%);
    transform: scale(1.2, 1.2) rotateY(150deg);
  }
`
