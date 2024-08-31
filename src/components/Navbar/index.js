import {Component} from 'react'

import {withRouter} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

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
  onChangePath = () => {
    const {history} = this.props
    history.replace('/')
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, ToggleDarkTheme} = value
          return (
            <>
              <NavbarContainer DarkTheme={isDarkTheme}>
                <div>
                  <Img
                    src={
                      isDarkTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    onClick={this.onChangePath}
                  />
                </div>
                <LogoutContainer>
                  <ThemeButton onClick={ToggleDarkTheme}>
                    {isDarkTheme ? (
                      <Img2 src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png" />
                    ) : (
                      <Img2 src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png" />
                    )}
                  </ThemeButton>
                  <Img3 src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
                  <div>
                    <LogoutButton DarkTheme={isDarkTheme}>Logout</LogoutButton>
                  </div>
                </LogoutContainer>
              </NavbarContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default withRouter(Navbar)
