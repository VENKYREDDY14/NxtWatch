import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  toggleDarkTheme: () => {},
  savedVideos: [],
  saveItem: () => {},
  removeItem: () => {},
  activeTab: 'HOME',
  onChangeActiveTab: () => {},
  toggleIsLike: () => {},
  toggleDisLike: () => {},
  savedVideosId: [],
  likedVideosIds: [],
  disLikedVideosIds: [],
})
export default ThemeContext
