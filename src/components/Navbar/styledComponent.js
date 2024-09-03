import styled from 'styled-components'

export const Img = styled.img`
  height: 50px;
  width: 200px;
`
export const NavbarContainer = styled.ul`
  background-color: ${props => (props.DarkTheme ? '#212121' : '#ffffff')};
  display: flex;
  justify-content: space-between;
  margin: 0;
  list-style-type: none;
`

export const LogoutContainer = styled.li`
  display: flex;
`

export const Img2 = styled.img`
  height: 50px;
  width: 50px;
`
export const Img3 = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 30px;
`
export const ThemeButton = styled.button`
  border-style: none;
  background: none;
  margin-right: 20px;
`
export const LogoutButton = styled.button`
  border-style: solid;
  background: none;
  border-color: ${props => (props.DarkTheme ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.DarkTheme ? '#ffffff' : '#3b82f6')};
  padding: 10px;
  margin-right: 20px;
  margin-top: 5px;
`
