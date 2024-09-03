import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {
  LogoutContainer,
  Description,
  Button,
  ButtonContainer,
} from './styledComponent'

const Logout = props => {
  const {close} = props
  const onClickConfirm = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <>
      <LogoutContainer>
        <Description>Are you sure, you want to logout</Description>
        <ButtonContainer>
          <Button
            outline
            onClick={() => {
              close()
            }}
          >
            Cancel
          </Button>
          <Button onClick={onClickConfirm}>Confirm</Button>
        </ButtonContainer>
      </LogoutContainer>
    </>
  )
}
export default withRouter(Logout)
