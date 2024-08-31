import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'

import {
  Img,
  ImageBottom,
  Img1,
  Description,
  Title,
  ListItem,
} from './styledComponent'

const VideoItem = props => {
  const {eachVideo} = props
  const {id, channel, publishedAt, thumbnailUrl, title, viewCount} = eachVideo
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <>
            <ListItem>
              <Img src={thumbnailUrl} />
              <ImageBottom>
                <div>
                  <Img1 src={channel.profile_image_url} />
                </div>
                <div>
                  <Description isDark={isDarkTheme}>{title}</Description>
                  <Title>{channel.name}</Title>
                  <div>
                    <Title>
                      {viewCount} . {formatDistanceToNow(new Date(publishedAt))}
                    </Title>
                  </div>
                </div>
              </ImageBottom>
            </ListItem>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default VideoItem
