import { Route, Routes } from 'react-router-dom';
import './App.css';
//Blur Image
import "react-lazy-load-image-component/src/effects/blur.css";
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import OurWorks from './OurWorks/OurWorks';
import NavBar from './Components/NavBar';
function App() {
  return (
    <>
      <ScrollToTop/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<OurWorks/>}/>

        {/* <Route path='/services' element={<Services/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
       
        <Route path='/contact' element={<ContactUs/>}/> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
