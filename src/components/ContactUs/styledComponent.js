import styled from 'styled-components'

export const Heading = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 18px;
`
export const Img = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
`
export const ImgContainer = styled.div`
  display: flex;
`
export const Heading1 = styled.p`
  font-family: 'Roboto';
  color: #7e858e;
  font-size: 15px;
`
export const ContactUsContainer = styled.div`
  width: 150px;
  margin-left: 30px;
`
