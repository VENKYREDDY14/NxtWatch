import styled from 'styled-components'

export const HomeBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;

  width: 90%;
  padding: 20px;
`
export const Img = styled.img`
  width: 150px;
  height: 30px;
  margin: 20px;
`
export const GetItButton = styled.button`
  border-style: solid;
  background: none;
  border-color: #000000;
  color: #000000;
  padding: 10px;
  border-width: 1px;
  margin: 20px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #7e858e;

  font-size: 15px;
  margin: 20px;
`
export const HomeContainer = styled.div`
  display: flex;
  margin: 20px;
`
export const SearchContainer = styled.div`
  display: flex;
  margin-left: 40px;

  margin-top: 10px;
`
export const Input = styled.input`
  width: 200px;
  padding: 5px;
  cursor: pointer;
  outline: none;
  width: 300px;
  border-color: ${props => (props.isDark ? '#ffffff' : '#dcdcdc')};
  border-style: solid;
  border-width: 3px;
  background-color: ${props => props.isDark && '#000000'};
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const IconContainer = styled.button`
border-style:solid;
border-width:1px;
height:30px;
padding:5px;
width:60px;
border-color${props => (props.isDark ? '#424242' : '#000000')};
color:${props => props.isDark && '#ffffff'}
`
export const HomeBgMain = styled.div`
  width: 80%;
`
export const SidebarWidth = styled.div`
  width: 20%;
`
export const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
export const Description = styled.p`
  font-family: 'Roboto';
  color: #7e858e;
`
export const ErrorImage = styled.img`
  height: 300px;
  width: 400px;
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
  color: ${props => props.isDark && '#ffffff'};
`
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const HomeMainContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
export const CloseButton = styled.button`
  text-align: end;
  width: 70vw;
  background: none;
  border-style: none;
  margin-bottom: 20px;
  color: ${props => (props.isDark ? '#ffffff' : '')};
`
