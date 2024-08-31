import styled from 'styled-components'

export const Img = styled.img`
  height: 200px;
  width: 300px;
`
export const ImageBottom = styled.div`
  display: flex;
`
export const Img1 = styled.img`
  height: 50px;
  width: 50px;
  margin-top: 10px;
`
export const Description = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#313131')};
  font-family: 'Roboto';
  width: 250px;
`
export const Title = styled.p`
  color: #7e858e;
  font-family: 'Roboto';
`
export const ListItem = styled.li`
  margin: 20px;
  margin-left: 0px;
`
