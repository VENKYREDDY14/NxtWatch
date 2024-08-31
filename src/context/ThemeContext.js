import React from 'react'

const ThemeContext = React.createContext({
  isDarkTheme: false,
  ToggleDarkTheme: () => {},
})
export default ThemeContext
