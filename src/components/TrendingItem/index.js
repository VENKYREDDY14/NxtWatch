import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

import {Img, Description, ListItem, ItemContainer} from './styledComponent'

const TrendingItem = props => {
  const {eachItem} = props
  const {id, channel, publishedAt, title, viewCount} = eachItem
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <Link to={`/videos/${id}`} className="link-item">
              <ListItem>
                <div>
                  <Img src={channel.profile_image_url} alt="channel logo" />
                </div>
                <ItemContainer>
                  <Description isDark={isDarkTheme}>{title}</Description>
                  <Description>{channel.name}</Description>
                  <Description>
                    {viewCount} . {formatDistanceToNow(new Date(publishedAt))}
                  </Description>
                </ItemContainer>
              </ListItem>
            </Link>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default TrendingItem
