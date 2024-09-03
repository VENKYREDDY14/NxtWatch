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
  const {
    data,
    onClickLike,
    onClickDisLike,
    isLiked,
    isDisLiked,
    onClickSave,
    isSaved,
  } = props

  const {channel, publishedAt, title, videoUrl, viewCount, description} = data
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, saveItem, removeItem} = value
        return (
          <ItemMainContainer>
            <div>
              <ReactPlayer url={videoUrl} />
              <Heading isDark={isDarkTheme}>{title}</Heading>
              <CountAndLikeContainer>
                <div>
                  <Description>
                    {viewCount} . {formatDistanceToNow(new Date(publishedAt))}
                  </Description>
                </div>
                <IconsContainer>
                  <SaveButton onClick={onClickLike}>
                    <IconContainer>
                      {isLiked ? (
                        <Description1>Like</Description1>
                      ) : (
                        <Description>Like</Description>
                      )}

                      <Icon isLiked={isLiked}>
                        <AiOutlineLike />
                      </Icon>
                    </IconContainer>
                  </SaveButton>
                  <SaveButton onClick={onClickDisLike}>
                    <IconContainer>
                      {isDisLiked ? (
                        <Description1>Dislike</Description1>
                      ) : (
                        <Description>Dislike</Description>
                      )}

                      <Icon isDisLiked={isDisLiked}>
                        <AiOutlineDislike />
                      </Icon>
                    </IconContainer>
                  </SaveButton>
                  <IconContainer>
                    {isSaved ? (
                      <SaveButton
                        onClick={() => {
                          removeItem(data)
                          onClickSave()
                        }}
                      >
                        <SaveButton1 isSaved={isSaved}>Saved</SaveButton1>
                        <Icon isSaved={isSaved}>
                          <RiPlayListAddLine />
                        </Icon>
                      </SaveButton>
                    ) : (
                      <SaveButton
                        onClick={() => {
                          saveItem(data)
                          onClickSave()
                        }}
                      >
                        <SaveButton1 isSaved={isSaved}>Save</SaveButton1>
                        <Icon isSaved={isSaved}>
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
            </div>
          </ItemMainContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default ItemDetails
