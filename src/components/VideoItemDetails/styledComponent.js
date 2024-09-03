import styled from 'styled-components'

export const VideoItemsContainer = styled.div`
  display: flex;
`
export const SContainer = styled.div`
  width: 30%;
  padding: 10px;
`
export const MainContainer = styled.div`
  width: 70%;
  padding: 10px;
`
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const Description = styled.p`
  font-family: 'Roboto';
  color: #7e858e;
`
export const ErrorImage = styled.img`
  height: 300px;
  width: 400px;
`
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  border-style: none;
  width: 150px;
`
export const Heading1 = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const VideoMainContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const List = styled.ul`
  list-style-type: none;
`
