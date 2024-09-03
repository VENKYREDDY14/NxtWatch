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
    isLiked: false,
    isDisLiked: false,
    isSaved: false,
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
      }))
    }
  }

  removeItem = data => {
    const {savedVideos} = this.state
    const filteredData = savedVideos.filter(eachItem => eachItem.id !== data.id)
    console.log(filteredData)
    this.setState({savedVideos: filteredData})
  }

  onChangeActiveTab = id => {
    this.setState({activeTab: id})
  }

  toggleLike = () => {
    this.setState({isLiked: true, isDisLiked: false})
  }

  toggleDisLike = () => {
    this.setState({isDisLiked: true, isLiked: false})
  }

  toggleSave = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  render() {
    const {
      isDarkTheme,
      savedVideos,
      activeTab,
      isLiked,
      isDisLiked,
      isSaved,
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
          isSaved,
          toggleLike: this.toggleLike,
          toggleDisLike: this.toggleDisLike,
          toggleSave: this.toggleSave,
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
