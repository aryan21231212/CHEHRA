import {Route , Routes,  BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './components/home/Home.jsx'
import Auth2 from './components/Auth/Auth2.jsx'
import Auth from './components/Auth/Auth.jsx'
import VideoMeet from './components/video/VideoMeet.jsx'
import HomeComponent from './components/home/AfterLogin.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/auth' element = {<Auth />} />
      <Route path='/auth2' element = {<Auth2 />} />
      <Route path='/:url' element = {<VideoMeet />} />
      <Route path='/home's element={<HomeComponent />} />
    </Routes>
  </BrowserRouter>
   

)
