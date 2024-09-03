import styled from 'styled-components'

export const Img = styled.img`
  height: 200px;
  width: 350px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.isDark && '#ffffff'};
  font-size: 22px;
`
export const Description = styled.p`
  font-family: 'Roboto';
  color: #475569;
`
export const MainContainer = styled.li`
  display: flex;
  background-color: ${props => props.isDark && '#000000'};
`
export const DescriptionContainer = styled.div`
  margin: 20px;
  width: 350px;
`
