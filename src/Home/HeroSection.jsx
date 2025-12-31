import { FaLaptopCode, FaWhatsapp } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component"
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"

const subtitle = "I create fast, modern, and SEO-friendly websites to help businesses grow. Specializing in custom solutions with React, Tailwind CSS, and full-stack development.";
const HeroSection = () => {
  return (
    <section className="mt-15 xs:mt-6 lg:hidden relative h-130 xs:h-150 
    flex items-center justify-start bg-white">                        

      {/* Background image with overlay */}
      <div className="absolute inset-0 flex justify-center">
        <LazyLoadImage
          src="/images/Home/HeroCTA/hero-img-5.jpg"
          alt="AC Technician"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 px-5 xs:px-8 sm:px-15"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut"}}
      >
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
        <motion.h1 
          className="mb-2 sm:mb-3 text-gray-900 font-bold font-neuton
          text-3xl text-4xl sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I'm <span className="text-blue-700">Sasikumar </span> 
        Web Developer & 
        <span className="text-blue-700"> SEO Specialist</span> 
        </motion.h1>

        {/* Subtitle */}
        <p className="text-gray-700 font-medium text-base sm:text-lg md:text-xl mb-5">
          {subtitle}
        </p>
        
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
      </motion.div>
    </section>
  )
}

export default HeroSection
