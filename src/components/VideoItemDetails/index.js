import {Component} from 'react'

import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import Navbar from '../Navbar'

import Sidebar from '../Sidebar'

import ItemDetails from '../ItemDetails'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoItemsContainer,
  SContainer,
  MainContainer,
  LoadingContainer,
  ErrorContainer,
  Heading1,
  Description,
  ErrorImage,
  RetryButton,
  VideoMainContainer,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'INPROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    data: {},
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.progress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const videoDetails = data.video_details

    const updatedData = {
      channel: videoDetails.channel,
      description: videoDetails.description,
      id: videoDetails.id,
      publishedAt: videoDetails.published_at,
      thumbnailUrl: videoDetails.thumbnail_url,
      title: videoDetails.title,
      videoUrl: videoDetails.video_url,
      viewCount: videoDetails.view_count,
    }
    if (response.ok) {
      this.setState({data: updatedData, apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  retryRender = () => {
    this.getVideoDetails()
  }

  renderSuccess = (
    isLiked,
    isDisLiked,
    isSaved,
    toggleLike,
    toggleDisLike,
    toggleSave,
  ) => {
    const {data} = this.state
    return (
      <>
        <div>
          <ItemDetails
            data={data}
            isLiked={isLiked}
            isDisLiked={isDisLiked}
            isSaved={isSaved}
            onClickLike={toggleLike}
            onClickDisLike={toggleDisLike}
            onClickSave={toggleSave}
          />
        </div>
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
          alt="failure view"
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

  renderVideo = (
    isDarkTheme,
    isLiked,
    isDisLiked,
    isSaved,
    toggleLike,
    toggleDisLike,
    toggleSave,
  ) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccess(
          isLiked,
          isDisLiked,
          isSaved,
          toggleLike,
          toggleDisLike,
          toggleSave,
        )
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
          const {
            isDarkTheme,
            isLiked,
            isDisLiked,
            isSaved,
            toggleLike,
            toggleDisLike,
            toggleSave,
          } = value
          return (
            <>
              <VideoMainContainer
                isDark={isDarkTheme}
                data-testid="videoItemDetails"
              >
                <div>
                  <Navbar />
                  <div>
                    <VideoItemsContainer>
                      <SContainer>
                        <Sidebar />
                      </SContainer>
                      <MainContainer>
                        {this.renderVideo(
                          isDarkTheme,
                          isLiked,
                          isDisLiked,
                          isSaved,
                          toggleLike,
                          toggleDisLike,
                          toggleSave,
                        )}
                      </MainContainer>
                    </VideoItemsContainer>
                  </div>
                </div>
              </VideoMainContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default VideoItemDetails
