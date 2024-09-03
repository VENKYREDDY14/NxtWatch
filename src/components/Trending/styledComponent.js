import styled from 'styled-components'

export const TrendingContainer = styled.div`
  display: flex;
  padding: 10px;
`
export const TrendingTopContainer = styled.div`
  background-color: #ebebeb;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 150px;
  padding: 10px;
  background-color: ${props => props.isDark && '#231f20'};
`
export const IconContainer = styled.div`
  background-color: #d7dfe9;
  border-radius: 50%;
  padding: 10px;
  width: 50px;
  height: 50px;
  margin: 10px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  margin: 10px;
  margin-top: 20px;
  color: ${props => props.isDark && '#ffffff'};
`
export const SidebarContainer = styled.div`
  width: 20%;
`
export const Trendingg = styled.div`
  margin-top: 20px;
  background-color: #f4f4f4;
  width: 70%;
  background-color: ${props => props.isDark && '#000000'};
  box-shadow: ${props => props.isDark && '0px 0px 10px 0px'};
`
export const UnorderedList = styled.ul`
  list-style-type: none;
`
export const TrendingMainContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
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
