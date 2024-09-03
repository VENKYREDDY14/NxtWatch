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
  toggleIsSave: () => {},
  isLIked: false,
  isDisLiked: false,
  isSaved: false,
})
export default ThemeContext
