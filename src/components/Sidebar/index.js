
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

const Sidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <SidebarMainContainer>
          <SidebarContainer>
            <ItemContainer>
              <IoMdHome
                className={isDarkTheme ? 'styling-icon1' : 'styling-icon'}
              />
              <Heading>Home</Heading>
            </ItemContainer>
            <ItemContainer>
              <FaGripfire
                className={isDarkTheme ? 'styling-icon1' : 'styling-icon'}
              />
              <Heading>Trending</Heading>
            </ItemContainer>
            <ItemContainer>
              <SiYoutubegaming
                className={isDarkTheme ? 'styling-icon1' : 'styling-icon'}
              />
              <Heading>Gaming</Heading>
            </ItemContainer>
            <ItemContainer>
              <RiPlayListAddLine
                className={isDarkTheme ? 'styling-icon1' : 'styling-icon'}
              />
              <Heading>Saved videos</Heading>
            </ItemContainer>
          </SidebarContainer>
          <ContactUs />
        </SidebarMainContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default Sidebar
