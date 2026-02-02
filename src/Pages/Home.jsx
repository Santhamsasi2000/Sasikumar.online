import ChooseMe from "../Home/ChooseMe"
import Contact from "../Home/Contact/Contact"
import HeroDesktop from "../Home/HeroDesktop"
import HeroMobile from "../Home/HeroMobile"
import LatestWorks from "../Home/LatestWorks"
import Services from "../Home/Services"

const Home = () => {
  return (
    <>
      <HeroDesktop/>
      <HeroMobile/>
      <Services/>
      <LatestWorks/>
      <ChooseMe/>
      <Contact/>
      {/* <ContactOrPortfolioCTA/> */}
    </>
  )
}

export default Home
