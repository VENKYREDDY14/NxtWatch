import {Component} from 'react'

import Loader from 'react-loader-spinner'

import {IoIosSearch} from 'react-icons/io'

import Cookies from 'js-cookie'

import Navbar from '../Navbar'

import Sidebar from '../Sidebar'

import VideoItem from '../VideoItem'

import ThemeContext from '../../context/ThemeContext'

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
  UnorderedList,
  ErrorImage,
  Description,
  RetryButton,
  Heading1,
  ErrorContainer,
  LoadingContainer,
  HomeMainContainer,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'INPROGRESS',
}

class Home extends Component {
  state = {searchInput: '', apiStaus: apiStatusConstants.initial, data: []}

  componentDidMount() {
    this.renderHomeDetails()
  }

  renderHomeDetails = async () => {
    this.setState({apiStaus: apiStatusConstants.progress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    console.log(url)
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const {total, videos = []} = data
      const formatedData = videos.map(eachVideo => ({
        channel: eachVideo.channel,
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({apiStaus: apiStatusConstants.success})
      this.setState({data: formatedData})
    } else {
      this.setState({apiStaus: apiStatusConstants.failure})
      console.log(data)
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearch = () => {
    this.renderHomeDetails()
  }

  retryRender = () => {
    this.renderHomeDetails()
  }

  renderSuccess = () => {
    const {data} = this.state
    const {length} = data
    return (
      <>
        {length === 0 ? (
          <ErrorContainer>
            <ErrorImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" />
            <Heading1>No Search results found</Heading1>
            <Description>
              Try different keywords or remove search filter
            </Description>
            <div>
              <RetryButton onClick={this.retryRender}>Retry</RetryButton>
            </div>
          </ErrorContainer>
        ) : (
          <UnorderedList>
            {data.map(eachVideo => (
              <VideoItem eachVideo={eachVideo} key={eachVideo.id} />
            ))}
          </UnorderedList>
        )}
      </>
    )
  }

  renderLoading = () => (
    <LoadingContainer>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="blue" height="50" width="50" />
      </div>
    </LoadingContainer>
  )

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

  renderHome = isDarkTheme => {
    const {apiStaus} = this.state
    switch (apiStaus) {
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
              <HomeMainContainer isDark={isDarkTheme}>
                <Navbar />
                <HomeContainer>
                  <SidebarWidth>
                    <Sidebar />
                  </SidebarWidth>
                  <HomeBgMain>
                    <HomeBg>
                      <Img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
                      <Heading>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </Heading>
                      <GetItButton>GET IT NOW</GetItButton>
                    </HomeBg>
                    <SearchContainer isDark={isDarkTheme}>
                      <Input
                        type="search"
                        onChange={this.onChangeSearchInput}
                        isDark={isDarkTheme}
                      />
                      <IconContainer isDark={isDarkTheme}>
                        <IoIosSearch onClick={this.onSearch} />
                      </IconContainer>
                    </SearchContainer>
                    {this.renderHome(isDarkTheme)}
                  </HomeBgMain>
                </HomeContainer>
              </HomeMainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Home
