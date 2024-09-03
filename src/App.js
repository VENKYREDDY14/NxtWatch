import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'

import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import NotFound from './components/NotFound'

import VideoItemDetails from './components/VideoItemDetails'

import SavedVideos from './components/SavedVideos'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideos: [],
    activeTab: '',
    savedVideosId: [],
    likedVideosIds: [],
    disLikedVideosIds: [],
  }

  toggleDarkTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  saveItem = video => {
    const {savedVideos} = this.state
    const isVideoAlreadyExists = savedVideos.some(each => each.id === video.id)
    if (isVideoAlreadyExists) {
      this.setState(prevState => ({savedVideos: prevState.savedVideos}))
    } else {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, video],
        savedVideosId: [...prevState.savedVideosId, video.id],
      }))
    }
  }

  removeItem = data => {
    const {savedVideos, savedVideosId} = this.state
    const filteredData = savedVideos.filter(eachItem => eachItem.id !== data.id)
    const filteredIds = savedVideosId.filter(eachItem => eachItem !== data.id)
    this.setState({savedVideos: filteredData, savedVideosId: filteredIds})
  }

  onChangeActiveTab = id => {
    this.setState({activeTab: id})
  }

  toggleLike = id => {
    this.setState(prevState => ({
      likedVideosIds: [...prevState.likedVideosIds, id],
      disLikedVideosIds: prevState.disLikedVideosIds.filter(
        eachItem => eachItem !== id,
      ),
    }))
  }

  toggleDisLike = id => {
    this.setState(prevState => ({
      disLikedVideosIds: [...prevState.disLikedVideosIds, id],
      likedVideosIds: prevState.likedVideosIds.filter(
        eachItem => eachItem !== id,
      ),
    }))
  }

  render() {
    const {
      isDarkTheme,
      savedVideos,
      activeTab,
      isLiked,
      isDisLiked,
      savedVideosId,
      likedVideosIds,
      disLikedVideosIds,
    } = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleDarkTheme: this.toggleDarkTheme,
          saveItem: this.saveItem,
          savedVideos,
          removeItem: this.removeItem,
          onChangeActiveTab: this.onChangeActiveTab,
          activeTab,
          isLiked,
          isDisLiked,
          savedVideosId,
          toggleLike: this.toggleLike,
          toggleDisLike: this.toggleDisLike,
          toggleSave: this.toggleSave,
          likedVideosIds,
          disLikedVideosIds,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
