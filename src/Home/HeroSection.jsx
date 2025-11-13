import { LazyLoadImage } from "react-lazy-load-image-component"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { FiPhoneCall } from "react-icons/fi"

const HeroSection = () => {
  return (
    <section className="mt-18 relative h-90 xs:h-100 sm:h-120 flex items-center
     justify-start bg-white">

      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <LazyLoadImage
          src="/images/Home/HeroCTA/hero-cta-2.jpg"
          alt="AC Technician"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 px-6 flex flex-col items-center w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut"}}
      >
        {/* Title */}
        <motion.h1 
          className="mb-2 sm:mb-3 text-black font-extrabold
           text-4xl xl:text-5xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I'm Sasikumar 
        </motion.h1>
        <motion.h1 
          className="mb-2 sm:mb-3 text-black font-extrabold
           text-4xl xl:text-5xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Web Developer & SEO Specialist
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          className="text-black mb-3 sm:mb-4 text-center text-sm sm:text-[17px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Expert consultation, advanced diagnostics, and modern physiotherapy with compassionate care.
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          className="mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5}}
        >
            <a
             className="flex items-center gap-2.5 text-green-800
             bg-gray-600 rounded-xl px-3 sm:px-6 py-2 text-sm sm:text-base font-semibold
             shadow-xl hover:bg-gray-200 hover:shadow-xl hover:scale-105
             active:scale-95 active:bg-gray-300 transition-all duration-300 ease-in-out"
             href="tel:+919363725757" target="_blank" rel="noopener noreferrer">
              <FiPhoneCall className="text-lg sm:text-xl mt-0.5"/> Book Appointment
            </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection
