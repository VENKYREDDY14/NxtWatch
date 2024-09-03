import styled from 'styled-components'

export const LogoutContainer = styled.div`
  background-color: #ffffff;
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`
export const Description = styled.div`
  font-family: 'Roboto';
  color: #4f46e5;
`
export const Button = styled.button`
  border-radius: 5px;
  padding: 10px;
  background-color: ${props => (props.outline ? '#ffffff' : '#3b82f6')};
  color: ${props => (props.outline ? '#cccccc' : '#ffffff')};
  margin: 10px;
  border: 1px solid #0070c1;
`
export const ButtonContainer = styled.div`
  display: flex;
`
