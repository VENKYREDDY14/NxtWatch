import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'

import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'

import Trending from './components/Trending'

import Gaming from './components/Gaming'

import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  ToggleDarkTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          ToggleDarkTheme: this.ToggleDarkTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
