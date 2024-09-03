import styled from 'styled-components'

export const Img = styled.img`
  height: 250px;
  width: 300px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const Description = styled.p`
  font-family: 'Roboto';
  color: #7e858e;
`
export const ListItem = styled.li`
  display: flex;
  margin: 20px;
`
export const ItemContainer = styled.div`
  width: 300px;
  margin: 20px;
  margin-top: 30px;
`
