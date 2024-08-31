import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import {FaGripfire} from 'react-icons/fa'
import Navbar from '../Navbar'

import Sidebar from '../Sidebar'


import TrendingItem from '../TrendingItem'

import ThemeContext from '../../context/ThemeContext'

import {
  TrendingContainer,
  TrendingTopContainer,
  IconContainer,
  Heading,
  SidebarContainer,
  Trendingg,
  UnorderedList,
  TrendingMainContainer,
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

class Trending extends Component {
  state = {data: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.renderTrending()
  }

  renderTrending = async () => {
    this.setState({apiStatus: apiStatusConstants.progress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
      channel: eachVideo.channel,
      id: eachVideo.id,
      publishedAt: eachVideo.published_at,
      thumbnailUrl: eachVideo.thumbnail_url,
      title: eachVideo.title,
      viewCount: eachVideo.view_count,
    }))
    if (response.ok) {
      this.setState({apiStatus: apiStatusConstants.success})
      this.setState({data: updatedData})
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
            <TrendingItem key={eachItem.id} eachItem={eachItem} />
          ))}
        </UnorderedList>
      </>
    )
  }

  retryRender = () => {
    this.renderTrending()
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

  renderTrend = isDarkTheme => {
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
              <TrendingMainContainer isDark={isDarkTheme}>
                <Navbar />
                <TrendingContainer>
                  <SidebarContainer>
                    <Sidebar />
                  </SidebarContainer>
                  <Trendingg isDark={isDarkTheme}>
                    <TrendingTopContainer isDark={isDarkTheme}>
                      <IconContainer>
                        <FaGripfire />
                      </IconContainer>
                      <Heading isDark={isDarkTheme}>Trending</Heading>
                    </TrendingTopContainer>
                    {this.renderTrend(isDarkTheme)}
                  </Trendingg>
                </TrendingContainer>
              </TrendingMainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Trending
