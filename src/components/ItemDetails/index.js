import ReactPlayer from 'react-player'

import {formatDistanceToNow} from 'date-fns'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {RiPlayListAddLine} from 'react-icons/ri'

import ThemeContext from '../../context/ThemeContext'

import {
  CountAndLikeContainer,
  IconContainer,
  IconsContainer,
  Icon,
  Heading,
  Description,
  Img,
  DescriptionContainer,
  ItemMainContainer,
  SaveButton,
  Description1,
  SaveButton1,
} from './styledComponent'

const ItemDetails = props => {
  const {data, onClickLike, onClickDisLike} = props

  const {
    channel,
    publishedAt,
    title,
    videoUrl,
    viewCount,
    description,
    id,
  } = data
  return (
    <ThemeContext.Consumer>
      {value => {
        const {
          isDarkTheme,
          saveItem,
          removeItem,
          savedVideosId,
          likedVideosIds,
          disLikedVideosIds,
        } = value
        return (
          <ItemMainContainer>
            <li>
              <ReactPlayer url={videoUrl} />
              <Heading isDark={isDarkTheme}>{title}</Heading>
              <CountAndLikeContainer>
                <div>
                  <Description>
                    {viewCount} . {formatDistanceToNow(new Date(publishedAt))}
                  </Description>
                </div>
                <IconsContainer>
                  <SaveButton
                    onClick={() => {
                      onClickLike(id)
                    }}
                  >
                    <IconContainer>
                      {likedVideosIds.includes(id) ? (
                        <Description1>Like</Description1>
                      ) : (
                        <Description>Like</Description>
                      )}

                      <Icon value={likedVideosIds.includes(id)}>
                        <AiOutlineLike />
                      </Icon>
                    </IconContainer>
                  </SaveButton>
                  <SaveButton onClick={onClickDisLike}>
                    <IconContainer>
                      {disLikedVideosIds.includes(id) ? (
                        <Description1>Dislike</Description1>
                      ) : (
                        <Description>Dislike</Description>
                      )}

                      <Icon value={disLikedVideosIds.includes(id)}>
                        <AiOutlineDislike />
                      </Icon>
                    </IconContainer>
                  </SaveButton>
                  <IconContainer>
                    {savedVideosId.includes(id) ? (
                      <SaveButton
                        onClick={() => {
                          removeItem(data)
                        }}
                      >
                        <SaveButton1 value={savedVideosId.includes(id)}>
                          Saved
                        </SaveButton1>
                        <Icon value={savedVideosId.includes(id)}>
                          <RiPlayListAddLine />
                        </Icon>
                      </SaveButton>
                    ) : (
                      <SaveButton
                        onClick={() => {
                          saveItem(data)
                        }}
                      >
                        <SaveButton1>Save</SaveButton1>
                        <Icon>
                          <RiPlayListAddLine />
                        </Icon>
                      </SaveButton>
                    )}
                  </IconContainer>
                </IconsContainer>
              </CountAndLikeContainer>
              <DescriptionContainer isDark={isDarkTheme}>
                <div>
                  <Img src={channel.profile_image_url} />
                </div>
                <div>
                  <Heading isDark={isDarkTheme}>{channel.name}</Heading>
                  <Description>
                    {channel.subscriber_count} subscribers
                  </Description>
                  <Description>{description}</Description>
                </div>
              </DescriptionContainer>
            </li>
          </ItemMainContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default ItemDetails
