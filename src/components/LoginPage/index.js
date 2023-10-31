import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginContainer,
  LoginCardContainer,
  LoginImg,
  LoginFormContainer,
  LoginHeading,
  LoginInputLabel,
  LoginInput,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginPage extends Component {
  state = {userId: '', userPin: '', errorMessage: '', loginError: ''}

  loginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  loginError = errMsg => {
    this.setState({loginError: true, errorMessage: errMsg})
  }

  loginRequest = async event => {
    event.preventDefault()
    const {userId, userPin} = this.state
    const url = 'https://apis.ccbp.in/ebank/login'
    const userDetails = {userId, userPin}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginError(data.error_msg)
    }
  }

  onChangeUserId = event => {
    this.setState({userId: event.target.value})
  }

  onChangeUserPin = event => {
    this.setState({userPin: event.target.value})
  }

  render() {
    const {userId, userPin, loginError, errorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginCardContainer>
          <LoginImg
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <LoginFormContainer onSubmit={this.loginRequest}>
            <LoginHeading>Welcome Back!</LoginHeading>

            <LoginInputLabel htmlFor="ID">User ID</LoginInputLabel>
            <LoginInput
              type="text"
              id="ID"
              value={userId}
              placeholder="Enter User ID"
              onChange={this.onChangeUserId}
            />

            <LoginInputLabel htmlFor="PIN">PIN</LoginInputLabel>
            <LoginInput
              type="password"
              id="PIN"
              value={userPin}
              placeholder="Enter PIN"
              onChange={this.onChangeUserPin}
            />

            <LoginButton type="submit">Login</LoginButton>
            {loginError ? <ErrorMsg>{errorMessage}</ErrorMsg> : null}
          </LoginFormContainer>
        </LoginCardContainer>
      </LoginContainer>
    )
  }
}
export default LoginPage
