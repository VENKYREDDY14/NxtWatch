import {Component} from 'react'

import Cookies from 'js-cookie'

import {Redirect} from 'react-router-dom'

import {
  Img,
  Label,
  Input,
  CredentialContainer,
  Button,
  CheckBoxContainer,
  LoginContainer,
  Description,
} from './styledComponents'

class App extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
    showPassword: false,
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 10})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState(prevState => ({
      showError: !prevState.showError,
      errorMsg: error,
      username: '',
      password: '',
    }))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  renderLoginDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const newUserDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(newUserDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMsg, showError, showPassword} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginContainer>
        <form onSubmit={this.renderLoginDetails}>
          <Img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
          <CredentialContainer>
            <Label htmlFor="username">USERNAME</Label>
            <br />
            <Input
              type="text"
              id="username"
              onChange={this.onChangeUsername}
              value={username}
            />
          </CredentialContainer>
          <CredentialContainer>
            <Label htmlFor="password">PASSWORD</Label>
            <br />
            <Input
              type={showPassword ? 'text' : 'password'}
              id="password"
              onChange={this.onChangePassword}
              value={password}
            />
          </CredentialContainer>
          <div>
            <CheckBoxContainer>
              <input
                type="checkbox"
                onChange={this.onShowPassword}
                id="showPassword"
              />
              <br />
              <Label for="showPassword">Show Password</Label>
            </CheckBoxContainer>
          </div>
          <div>
            <Button type="submit">Login</Button>
            {showError && <Description>*{errorMsg}</Description>}
          </div>
        </form>
      </LoginContainer>
    )
  }
}
export default App
