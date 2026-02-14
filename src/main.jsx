import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './Components/NavBar.jsx'
import Contact from './Home/Contact/Contact.jsx'
import Footer from './Components/Footer.jsx'
import OurWorks from './OurWorks/OurWorks.jsx'
import Services from './Home/Services.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
      {/* <NavBar/> */} 
      {/* <Contact/> */}
      {/* <Footer/> */}
      {/* <OurWorks/> */}
      {/* <Services/> */}
    </BrowserRouter>
  </StrictMode>,
)
