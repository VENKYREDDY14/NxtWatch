import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  Img,
  Heading,
  Description,
  ListItem,
  ItemContainer,
} from './styledComponent'

const TrendingItem = props => {
  const {eachItem} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = eachItem
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <ListItem>
              <div>
                <Img src={channel.profile_image_url} />
              </div>
              <ItemContainer>
                <Heading isDark={isDarkTheme}>{title}</Heading>
                <Description>{channel.name}</Description>
                <Description>
                  {viewCount} . {formatDistanceToNow(new Date(publishedAt))}
                </Description>
              </ItemContainer>
            </ListItem>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default TrendingItem
