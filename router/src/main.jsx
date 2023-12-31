import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Contact from './components/contact.jsx'
import Parameter from './components/parameter.jsx'
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       }, {
//         path: "about",
//         element: <About />
//       }, {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='parameter/:imp' element={<Parameter />}></Route>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
