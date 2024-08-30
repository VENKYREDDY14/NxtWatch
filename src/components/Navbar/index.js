import {Component} from 'react'

import {
  Img,
  NavbarContainer,
  LogoutContainer,
  Img2,
  Img3,
  LogoutButton,
  ThemeButton,
} from './styledComponent'

class Navbar extends Component {
  render() {
    return (
      <>
        <NavbarContainer>
          <div>
            <Img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
          </div>
          <LogoutContainer>
            <ThemeButton>
              <Img2 src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png" />
            </ThemeButton>
            <Img3 src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
            <div>
              <LogoutButton>Logout</LogoutButton>
            </div>
          </LogoutContainer>
        </NavbarContainer>
      </>
    )
  }
}
export default Navbar
