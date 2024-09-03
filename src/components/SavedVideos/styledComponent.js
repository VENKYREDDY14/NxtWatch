import styled from 'styled-components'

export const Img = styled.img`
  height: 300px;
  width: 400px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.isDark && '#ffffff'};
`
export const Description = styled.p`
  font-family: 'Roboto';
  color: #616e7c;
`
export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
`

export const SavedContainer = styled.div`
  display: flex;
`
export const SavedContainerMain = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const Videos = styled.div`
  background-color: ${props => (props.isDark ? '#000000' : '#ebebeb')};
  box-shadow: ${props => props.isDark && '0px 0px 10px 0px'};
  margin-top: 20px;
  height: 100vh;
`
export const VideosContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#cccccc')};

  display: flex;
`
export const IconContainer = styled.div`
  background-color: #cbd5e1;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 10px;
`
export const SidebarContainer = styled.div`
  width: 20%;
`
