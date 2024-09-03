import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

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
            <Link to={`/videos/${id}`} className="link-item">
              <ListItem>
                <Img src={thumbnailUrl} alt="video thumbnail" />
                <ImageBottom>
                  <div>
                    <Img1 src={channel.profile_image_url} alt="channel logo" />
                  </div>
                  <div>
                    <Description isDark={isDarkTheme}>{title}</Description>
                    <Title>{channel.name}</Title>
                    <div>
                      <Title>
                        {viewCount} .
                        {formatDistanceToNow(new Date(publishedAt))}
                      </Title>
                    </div>
                  </div>
                </ImageBottom>
              </ListItem>
            </Link>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default VideoItem
