import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ChooseMe from './Home/ChooseMe.jsx'
import NavBar from './Components/NavBar.jsx'
import HeroCTA from './Home/HeroCTA.jsx'
import Services from './Home/Services.jsx'
import LatestWorks from './Home/LatestWorks.jsx'
import Contact from './Home/Contact/Contact.jsx'
import Footer from './Components/Footer.jsx'
import HeroSection from './Home/HeroSection.jsx'
import HeroSection2 from './Home/HeroSection2.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
      {/* <HeroSection/>
      <HeroCTA/> */}
    </BrowserRouter>
  </StrictMode>,
)
