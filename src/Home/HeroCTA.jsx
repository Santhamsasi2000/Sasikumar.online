import { FaLaptopCode, FaWhatsapp } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component"
import { NavLink } from "react-router-dom";

const subtitle = "I create fast, modern, and SEO-friendly websites to help businesses grow. Specializing in custom solutions with React, Tailwind CSS, and full-stack development.";

const HeroCTA = () => {
  return (
    <section className="px-5 sm:px-10 md:px-20 lg:px-40 xl:px-80 py-10 mt-15">
     
     {/* Badge */}
     <div className="flex mb-3">
        <span className="bg-blue-50 border-1 border-blue-200 
        px-4 py-1 rounded-4xl text-blue-900 font-semibold flex items-center">
          <LazyLoadImage src="/images/Home/HeroCTA/hand-shake-icon.png"
          className="w-8 h-8 animate-bounce"/>
          Available for new projects
        </span>
     </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-5 font-radley">
        Hi, I'm <span className="text-blue-600">Sasikumar </span> 
        Web Developer & 
        <span className="text-blue-600"> SEO Specialist</span> 
      </h1>

      {/* Subtitle */}
      <p className="text-gray-700 font-medium text-base sm:text-lg md:text-xl mb-5">{subtitle}</p>

      {/* Highlights */}
      <div className="flex flex-col sm:flex-row gap-2 md:gap-5 mb-5">
        <div className="flex gap-1 md:gap-2 items-center">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <p>8+ Projects Delivered</p>
        </div>
        <div className="flex gap-1 md:gap-2 items-center">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <p>100% Custom Solutions</p>
        </div>
        <div className="flex gap-1 md:gap-2 items-center">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <p>SEO Optimized</p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex gap-5 xs:gap-7 mb-5">
          <NavLink to="/projects" 
          className="flex items-center gap-2 bg-blue-600 text-white 
          px-5 xs:px-6 py-2 rounded-lg">
            <FaLaptopCode className="text-lg"/>View My Work
          </NavLink>
          <a href="https://api.whatsapp.com/send?phone=6384379814" 
            target="_blank" rel="noopener noreferrer" 
          className="flex items-center gap-2 border border-blue-600 text-blue-700
          px-5 xs:px-6 py-2 rounded-lg" 
          aria-label="Call us at 6384379814">
            <FaWhatsapp className="text-lg"/>Hire Me
          </a>
      </div>
    </section>
  )
}

export default HeroCTA
