import {Component} from 'react'

import {IoIosSearch} from 'react-icons/io'

import Cookies from 'js-cookie'

import Navbar from '../Navbar'

import Sidebar from '../Sidebar'

import {
  HomeBg,
  Img,
  GetItButton,
  Heading,
  HomeContainer,
  SearchContainer,
  Input,
  IconContainer,
  HomeBgMain,
  SidebarWidth,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'INPROGRESS',
}

class Home extends Component {
  state = {searchInput: '', apiStaus: apiStatusConstants.initial}
  renderHomeDetails = async () => {
    this.setState({apiStaus: apiStatusConstants.progress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.setState({apiStaus: apiStatusConstants.success})
    } else {
      this.setState({apiStaus: apiStatusConstants.failure})
    }
  }
  componentDidMount() {
    this.renderHomeDetails()
  }
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    return (
      <>
        <div>
          <Navbar />
          <HomeContainer>
            <SidebarWidth>
              <Sidebar />
            </SidebarWidth>
            <HomeBgMain>
              <HomeBg>
                <Img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
                <Heading>Buy Nxt Watch Premium prepaid plans with UPI</Heading>
                <GetItButton>GET IT NOW</GetItButton>
              </HomeBg>
              <SearchContainer>
                <Input type="search" onChange={this.onChangeSearchInput} />
                <IconContainer>
                  <IoIosSearch />
                </IconContainer>
              </SearchContainer>
            </HomeBgMain>
          </HomeContainer>
        </div>
      </>
    )
  }
}
export default Home
