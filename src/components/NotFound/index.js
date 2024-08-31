import {
  Img,
  Description,
  Heading,
  NotFoundContainer,
  NotFoundContainerBelow,
  NotFoundMainContainer,
} from './styledComponent'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import Sidebar from '../Sidebar'

const NotFound = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <NotFoundMainContainer isDark={isDarkTheme}>
              <Navbar />
              <NotFoundContainer>
                <div>
                  <Sidebar />
                </div>
                <NotFoundContainerBelow>
                  <Img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png" />
                  <Heading isDark={isDarkTheme}>Page Not Found</Heading>
                  <Description>
                    We are sorry, the page you requested could not be found
                  </Description>
                </NotFoundContainerBelow>
              </NotFoundContainer>
            </NotFoundMainContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
export default NotFound
