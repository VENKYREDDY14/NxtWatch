import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {Img, Heading, Description, ListItem} from './styledComponent'

const GamingItem = props => {
  const {eachItem} = props
  const {id, thumbnailUrl, title, viewCount} = eachItem
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <ListItem>
              <div>
                <Img src={thumbnailUrl} />
                <Heading isDark={isDarkTheme}>{title}</Heading>
                <Description>{viewCount} Watching Worldwide</Description>
              </div>
            </ListItem>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default GamingItem
