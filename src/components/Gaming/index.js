import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'
import Navbar from '../Navbar'

import Sidebar from '../Sidebar'


import GamingItem from '../GamingItem'

import ThemeContext from '../../context/ThemeContext'

import {
  GamingContainer,
  GamingTopContainer,
  IconContainer,
  Heading,
  SidebarContainer,
  Gamingg,
  UnorderedList,
  GamingMainContainer,
  Heading1,
  Description,
  RetryButton,
  ErrorContainer,
  ErrorImage,
  LoadingContainer,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'INPROGRESS',
}

class Gaming extends Component {
  state = {data: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.renderGaming()
  }

  renderGaming = async () => {
    this.setState({apiStatus: apiStatusConstants.progress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const {videos} = data

    const updatedData = videos.map(eachVideo => ({
      id: eachVideo.id,
      thumbnailUrl: eachVideo.thumbnail_url,
      title: eachVideo.title,
      viewCount: eachVideo.view_count,
    }))
    if (response.ok) {
      this.setState({apiStatus: apiStatusConstants.success, data: updatedData})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccess = () => {
    const {data} = this.state
    return (
      <>
        <UnorderedList>
          {data.map(eachItem => (
            <GamingItem key={eachItem.id} eachItem={eachItem} />
          ))}
        </UnorderedList>
      </>
    )
  }

  retryRender = () => {
    this.renderGaming()
  }

  renderFailure = isDarkTheme => (
      <>
        <ErrorContainer>
          <ErrorImage
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            }
          />
          <Heading1 isDark={isDarkTheme}>Oops! Something Went Wrong</Heading1>
          <Description>
            We are having trouble to complete your request.Please try again.
          </Description>
          <div>
            <RetryButton onClick={this.retryRender}>Retry</RetryButton>
          </div>
        </ErrorContainer>
      </>
    )

  renderLoading = () => (
    <LoadingContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="blue" height="50" width="50" />
      </div>
    </LoadingContainer>
  )

  renderGame = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccess()
      case apiStatusConstants.progress:
        return this.renderLoading()
      case apiStatusConstants.failure:
        return this.renderFailure(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <GamingMainContainer isDark={isDarkTheme}>
                <Navbar />
                <GamingContainer>
                  <SidebarContainer>
                    <Sidebar />
                  </SidebarContainer>
                  <Gamingg isDark={isDarkTheme}>
                    <GamingTopContainer isDark={isDarkTheme}>
                      <IconContainer>
                        <SiYoutubegaming />
                      </IconContainer>
                      <Heading isDark={isDarkTheme}>Gaming</Heading>
                    </GamingTopContainer>
                    {this.renderGame(isDarkTheme)}
                  </Gamingg>
                </GamingContainer>
              </GamingMainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Gaming
