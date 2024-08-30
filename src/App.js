import {Route} from 'react-router-dom'

import Login from './components/Login'

import Home from './components/Home'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => {
  return (
    <>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/" component={Home} />
    </>
  )
}

export default App
