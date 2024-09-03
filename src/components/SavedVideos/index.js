import {Component} from 'react'

import {FaGripfire} from 'react-icons/fa'

import Navbar from '../Navbar'

import Sidebar from '../Sidebar'

import ThemeContext from '../../context/ThemeContext'

import SavedDetails from '../SavedDetails'

import './index.css'

import {
  Img,
  Heading,
  Description,
  ErrorContainer,
  SavedContainer,
  SavedContainerMain,
  Videos,
  VideosContainer,
  IconContainer,
  SidebarContainer,
} from './styledComponent'

class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos} = value
          return (
            <SavedContainerMain isDark={isDarkTheme} data-testid="savedVideos">
              <Navbar />
              <SavedContainer>
                <SidebarContainer>
                  <Sidebar />
                </SidebarContainer>
                <div>
                  {savedVideos.length === 0 ? (
                    <ErrorContainer>
                      <Img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                        alt="no saved videos"
                      />
                      <Heading isDark={isDarkTheme}>
                        No saved videos found
                      </Heading>
                      <Description>
                        You can save your videos while watching them
                      </Description>
                    </ErrorContainer>
                  ) : (
                    <Videos isDark={isDarkTheme}>
                      <VideosContainer isDark={isDarkTheme}>
                        <IconContainer>
                          <FaGripfire className="icon" />
                        </IconContainer>
                        <Heading isDark={isDarkTheme}>Saved Videos</Heading>
                      </VideosContainer>
                      <ul>
                        {savedVideos.map(eachItem => (
                          <SavedDetails
                            eachVideo={eachItem}
                            key={eachItem.id}
                          />
                        ))}
                      </ul>
                    </Videos>
                  )}
                </div>
              </SavedContainer>
            </SavedContainerMain>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default SavedVideos
