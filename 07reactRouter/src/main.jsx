import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Layout from './layout.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/user.jsx'
import GitHub, { githubInfoLoader } from './components/GitHub/github.jsx'

// const router=createBrowserRouter([
//   {
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"contact",
//       element:<Contact/>
//     },
//   ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:userid" element={<User/>}/>
      <Route 
      loader={githubInfoLoader}
      path="github" 
      element={<GitHub/>}/>
    </Route>
  )
) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
