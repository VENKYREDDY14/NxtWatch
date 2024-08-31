import styled from 'styled-components'

export const Img = styled.img`
  height: 320px;
  width: 250px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => props.isDark && '#ffffff'};
`
export const Description = styled.p`
  font-family: 'Roboto';
  color: #7e858e;
`
export const ListItem = styled.li`
  margin: 20px;
`
export const ItemContainer = styled.div`
  width: 300px;
  margin: 20px;
  margin-top: 30px;
`
