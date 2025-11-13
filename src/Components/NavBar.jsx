import { Link, NavLink } from "react-router-dom";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NavBar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 50)
      {
        setScrolled(true);
      }
      else
      {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
   }, []);

    const toggleMenu = () => 
    {
      setMenuOpen(prev => !prev)
    };

    const closeMenu = () => {
      setMenuOpen(false);
    }

    //Animation Variants
    const navVariants = {
      hidden: { y: -80, opacity: 0 },
      visible: { y:0, opacity: 1 , transition: { duration: 1.5, ease: "easeOut" }}
    };

    const menuVariants = {
      hidden: { x: 80, opacity: 0 },
      visible: { x: 0, opacity: 1 , transition: { duration:1, ease: "easeOut" }},
      exit: { x: 80, opacity: 0 , transition: { duration: 1, ease: "easeIn" }}
    };

  return (
    <motion.nav 
      className={`p-3 sm:p-4
      transition-colors duration-300 ease-in-out fixed left-0 right-0 top-0 z-50 shadow-md 
      ${scrolled ? "bg-blue-700 shadow-md"
          : "bg-blue-700" }
          `}
      initial="hidden"
      animate="visible"
      variants={navVariants}
      >
       <div className="flex items-center justify-between">
        {/* Brand */}
        <NavLink to="/" className="text-white flex items-center gap-3">
          <LazyLoadImage className="w-[50px] h-[40px]" 
          src="/images/NavBar/sasikumar.online-logo-4.jpeg"
          threshold={200} effect="blur"/>
          <motion.h1 
          className="text-2xl sm:text-[28px] font-black mb-0 font-merienda"
          whileHover={{scale: 1.05}}
          transition={{ type: "spring", stiffness: 300 }}
          >
            Sasikumar
          </motion.h1>
        </NavLink>
        
        {/*======= Desktop Menus ====== */}
        {/* ====== sm to xxl ========*/}
        {/* Menus */}

        <ul className="hidden md:flex gap-10">
          <li className="">
            <NavLink className="text-white font-bold text-lg" to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li className="">
            <NavLink className="text-white font-bold text-lg" to="/projects" onClick={closeMenu}>
               My Works
            </NavLink>
          </li>

        </ul>

        <ul className="hidden lg:block">
           <a href="https://api.whatsapp.com/send?phone=6384379814" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white px-4 py-2 flex items-center
            gap-1 font-bold rounded-lg text-blue-700">
              <FaWhatsapp className="text-xl"/> Whatsapp
           </a>
        </ul>

         {/* ========== Mobile View ==========*/}
         {/* Toggle Button */}
         <div className="block md:hidden"> 
          <motion.button
            className="mt-2"
            type="button"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            animate={{ rotate: menuOpen ? 180 : 0}}
          >
            {menuOpen ? (
              <RxCross1 className="text-2xl text-white"/>
            ) : (
              <RxHamburgerMenu className="text-2xl text-white"/>
            )}
          </motion.button>
         </div>
       </div>

       {/* Mobile Menu */}
        <AnimatePresence>
        {
            menuOpen && (
            <motion.div
             className="block md:hidden"
             initial="hidden"
             animate="visible"
             exit="exit"
             variants={menuVariants}>
              <ul className="flex flex-col items-center gap-6 mt-5">
                <li className="">
                  <NavLink className="text-white" to="/" onClick={closeMenu}>
                    Home
                  </NavLink>
                </li>
                <li className="">
                  <NavLink className="text-white" to="/projects" onClick={closeMenu}>
                    My Works
                  </NavLink>
                </li>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=6384379814" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 px-4 py-2 flex items-center
                   gap-1 font-bold rounded-lg">
                    <FaWhatsapp className="text-xl"/> Whatsapp
                  </a>
                </li>
              </ul> 
            </motion.div>
            )
        }
        </AnimatePresence>
    </motion.nav>
  )
}

export default NavBar


