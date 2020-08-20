import React from 'react'
import JiraItem from './Menu-itens/Jira'
import SettingsItem from './Menu-itens/Settings'
import LogoutItem from './Menu-itens/Loggout'
import Groups from './Groups'
import { MenuContainer } from './style'

const Index = () => {
  return (
    <MenuContainer>
      <JiraItem />
      <SettingsItem />
      <LogoutItem />
      <Groups />
    </MenuContainer>
  )
}

export default Index
