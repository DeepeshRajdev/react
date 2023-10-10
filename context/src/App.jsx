import './App.css'
import Login from './components/Login'
import Provider from './context/provider'
import Montext from './context/userContext'
import { useContext } from 'react'
function App() {


  return (
    <Provider>
      <h1>Context</h1>
      <Login />

    </Provider>
  )
}

export default App
