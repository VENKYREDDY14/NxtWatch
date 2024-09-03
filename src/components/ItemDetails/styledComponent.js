import styled from 'styled-components'

export const CountAndLikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const IconContainer = styled.div`
  display: flex;
`
export const IconsContainer = styled.div`
  width: 300px;
  display: flex;
`
export const Icon = styled.button`
  margin: 10px;
  margin-top: 15px;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  color: ${props => (props.isDisLiked ? '#2563eb' : '#64748b')};
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
  background: none;
  border-style: none;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-size: 20px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  color: #64748b;
`
export const Img = styled.img`
  height: 60px;
  width: 60px;
  margin: 10px;
`
export const DescriptionContainer = styled.div`
  display: flex;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  box-shadow: 0px 0px 2px 0px;
`
export const ItemMainContainer = styled.div``
export const SaveButton = styled.button`
  border-style: none;
  background: none;
  display: flex;
  color: ${props => (props.value ? 'red' : 'green')};
`
export const Description1 = styled.p`
  font-family: 'Roboto';
  color: #2563eb;
`
export const SaveButton1 = styled.button`
  border-style: none;
  background: none;
  font-family: 'Roboto';
  color: ${props => props.isSaved && '#2563eb'};
  font-weight: bold;
  color: ${props => (props.value ? 'red' : 'green')};
`
export const Icon1 = styled.button`
  margin: 10px;
  margin-top: 15px;
  background: none;
  border-style: none;
`
