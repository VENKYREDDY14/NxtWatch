import {
  Heading,
  Img,
  ImgContainer,
  Heading1,
  ContactUsContainer,
} from './styledComponent'

import ThemeContext from '../../context/ThemeContext'

const ContactUs = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <ContactUsContainer>
              <Heading isDark={isDarkTheme}>CONTACT US</Heading>
              <ImgContainer>
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ImgContainer>
              <Heading1>
                Enjoy! Now to see your channels and recommendations!
              </Heading1>
            </ContactUsContainer>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
export default ContactUs
