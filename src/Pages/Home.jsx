import ChooseMe from "../Home/ChooseMe"
import Contact from "../Home/Contact/Contact"
import ContactOrPortfolioCTA from "../Home/ContactOrPortfolioCTA"
import HeroCTA from "../Home/HeroCTA"
import HeroSection from "../Home/HeroSection"
import LatestWorks from "../Home/LatestWorks"
import Services from "../Home/Services"

const Home = () => {
  return (
    <>
      <HeroCTA/>
      <HeroSection/>
      <Services/>
      <LatestWorks/>
      <ChooseMe/>
      <Contact/>
      {/* <ContactOrPortfolioCTA/> */}
    </>
  )
}

export default Home
