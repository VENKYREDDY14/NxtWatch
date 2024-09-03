import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {Img, Description, ListItem} from './styledComponent'

import './index.css'

const GamingItem = props => {
  const {eachItem} = props
  const {id, thumbnailUrl, title, viewCount} = eachItem
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <Link to={`/videos/${id}`} className="link-item">
              <ListItem>
                <div>
                  <Img src={thumbnailUrl} alt="video thumbnail" />
                  <Description isDark={isDarkTheme}>{title}</Description>
                  <Description>{viewCount} Watching Worldwide</Description>
                </div>
              </ListItem>
            </Link>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GamingItem
