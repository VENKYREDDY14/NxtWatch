import {Link} from 'react-router-dom'

import {IoMdHome} from 'react-icons/io'

import {FaGripfire} from 'react-icons/fa'

import {SiYoutubegaming} from 'react-icons/si'

import {RiPlayListAddLine} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'

import ContactUs from '../ContactUs'

import {
  ItemContainer,
  Heading,
  SidebarContainer,
  SidebarMainContainer,
} from './styledComponent'

import './index.css'

const siderBarItems = [
  {
    id: 'HOME',
    displayText: 'Home',
    path: '/',
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
    path: '/trending',
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
    path: '/gaming',
  },
  {
    id: 'SAVED VIDEOS',
    displayText: 'Saved videos',
    path: '/saved-videos',
  },
]

const Sidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, onChangeActiveTab} = value

      return (
        <SidebarMainContainer>
          <SidebarContainer>
            {siderBarItems.map(eachItem => (
              <Link to={eachItem.path} className="link-item">
                <ItemContainer
                  bgColor={eachItem.id === activeTab}
                  onClick={() => {
                    onChangeActiveTab(eachItem.id)
                  }}
                  key={eachItem.id}
                >
                  {eachItem.id === 'HOME' && (
                    <IoMdHome
                      className={`${
                        isDarkTheme ? 'styling-icon1' : 'styling-icon'
                      } ${
                        eachItem.id === activeTab ? 'red-color' : 'black-color'
                      }`}
                    />
                  )}
                  {eachItem.id === 'TRENDING' && (
                    <FaGripfire
                      className={`${
                        isDarkTheme ? 'styling-icon1' : 'styling-icon'
                      } ${
                        eachItem.id === activeTab ? 'red-color' : 'black-color'
                      }`}
                    />
                  )}
                  {eachItem.id === 'GAMING' && (
                    <SiYoutubegaming
                      className={`${
                        isDarkTheme ? 'styling-icon1' : 'styling-icon'
                      } ${
                        eachItem.id === activeTab ? 'red-color' : 'black-color'
                      }`}
                    />
                  )}
                  {eachItem.id === 'SAVED VIDEOS' && (
                    <RiPlayListAddLine
                      className={`${
                        isDarkTheme ? 'styling-icon1' : 'styling-icon'
                      } ${
                        eachItem.id === activeTab ? 'red-color' : 'black-color'
                      }`}
                    />
                  )}
                  <Heading key={eachItem.id}>{eachItem.displayText}</Heading>
                </ItemContainer>
              </Link>
            ))}
          </SidebarContainer>
          <ContactUs />
        </SidebarMainContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default Sidebar
