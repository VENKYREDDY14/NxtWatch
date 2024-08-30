import {IoMdHome} from 'react-icons/io'

import {FaGripfire} from 'react-icons/fa'

import {SiYoutubegaming} from 'react-icons/si'

import {RiPlayListAddLine} from 'react-icons/ri'

import {ItemContainer, Heading, SidebarContainer} from './styledComponent'

import './index.css'

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <ItemContainer>
          <IoMdHome className="styling-icon" />
          <Heading>Home</Heading>
        </ItemContainer>
        <ItemContainer>
          <FaGripfire className="styling-icon" />
          <Heading>Trending</Heading>
        </ItemContainer>
        <ItemContainer>
          <SiYoutubegaming className="styling-icon" />
          <Heading>Gaming</Heading>
        </ItemContainer>
        <ItemContainer>
          <RiPlayListAddLine className="styling-icon" />
          <Heading>Saved videos</Heading>
        </ItemContainer>
      </SidebarContainer>
    </>
  )
}
export default Sidebar
