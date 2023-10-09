import './App.css'
import Home from './components/home'
import { Outlet, NavLink } from 'react-router-dom'
function App() {

  return (
    <>
      <ul>
        <NavLink className="m-4" to="">Home</NavLink>
        <NavLink className="m-4" to="/about">About</NavLink>
        <NavLink className="m-4" to="/contact">Contact</NavLink>
      </ul>
      <Outlet />

    </>
  )
}

export default App
