import styled from 'styled-components'

export const Img = styled.img`
  height: 300px;
  width: 300px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  color: #94a3b8;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.isDark && '#ffffff'};
`
export const NotFoundContainer = styled.div`
  display: flex;
`
export const NotFoundContainerBelow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
`
export const NotFoundMainContainer = styled.div`
  background-color: ${props => props.isDark && '#000000'};
`
