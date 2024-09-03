import {formatDistanceToNow} from 'date-fns'

import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  Img,
  Description,
  MainContainer,
  DescriptionContainer,
} from './styledComponent'

const SavedDetails = props => {
  const {eachVideo} = props
  const {
    id,
    channel,
    publishedAt,
    thumbnailUrl,
    title,

    viewCount,
  } = eachVideo
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${id}`}>
            <MainContainer>
              <div>
                <Img src={thumbnailUrl} alt="video thumbnail" />
              </div>
              <DescriptionContainer>
                <Description isDark={isDarkTheme}>{title}</Description>
                <Description>{channel.name}</Description>
                <Description>
                  {viewCount} . {formatDistanceToNow(new Date(publishedAt))}
                </Description>
              </DescriptionContainer>
            </MainContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default SavedDetails
