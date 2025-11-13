import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const smallDesc = "Whether you need a new website, want to improve your current one, or need SEO optimization, I'm here to help you achieve your digital goals.";
const ContactOrPortfolioCTA = () => {
  return (
    <motion.section 
    className="bg-blue-300 p-10"
    initial={{ opacity: 0, y: -50 }}
    animate= {{ opacity: 1, y: 0}}
    transition={{ duration: 0.6 }}>
        <h1 className="text-2xl sm:text-3xl text-center text-white font-bold mb-3">Ready to Start Your Web Project?</h1>
        <p className="text-sm sm:text-base text-center mb-5 text-white">{smallDesc}</p>
        <div className="flex justify-center gap-5 xs:gap-7">
          <NavLink to="/projects" className="bg-bora-600 text-white px-5 xs:px-6 py-2 rounded-lg">
            View Portfolio
          </NavLink>
          <a href="tel:6384379814" 
          className="bg-skyline-50 px-5 xs:px-6 py-2 rounded-lg" 
          aria-label="Call us at 6384379814">Contact Us</a>
        </div>
    </motion.section>
  )
}

export default ContactOrPortfolioCTA
