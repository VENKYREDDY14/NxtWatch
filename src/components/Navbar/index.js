import {Component} from 'react'

import {withRouter, Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import ThemeContext from '../../context/ThemeContext'

import Logout from '../Logout'

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
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleDarkTheme} = value
          return (
            <>
              <NavbarContainer DarkTheme={isDarkTheme}>
                <li>
                  <Link to="/">
                    <Img
                      src={
                        isDarkTheme
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      }
                      alt="website logo"
                    />
                  </Link>
                </li>
                <LogoutContainer>
                  <ThemeButton onClick={toggleDarkTheme} data-testid="theme">
                    {isDarkTheme ? (
                      <Img2 src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png" />
                    ) : (
                      <Img2 src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png" />
                    )}
                  </ThemeButton>
                  <Img3
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <div>
                    <Popup
                      modal
                      trigger={
                        <LogoutButton DarkTheme={isDarkTheme}>
                          Logout
                        </LogoutButton>
                      }
                      className="popup-content"
                    >
                      {close => (
                        <>
                          <div>
                            <Logout close={close} />
                          </div>
                        </>
                      )}
                    </Popup>
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
