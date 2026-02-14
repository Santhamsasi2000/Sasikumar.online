import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  /* Animation Variants */
  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const menuVariants = {
    hidden: { x: 80, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      x: 80,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? "bg-blue-700 shadow-lg" : "bg-blue-700"}
      `}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="flex items-center justify-between p-3 sm:p-4 max-w-7xl mx-auto">
        
        {/* Logo / Brand */}
        <NavLink to="/" className="flex items-center gap-3 text-white">
          <img
            src="/images/NavBar/sasikumar.online-logo.webp"
            alt="Sasikumar logo"
            width="100"
            height="100"
            className="w-[40px] h-[30px] sm:w-[50px] sm:h-[35px] object-contain"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <motion.h1
            className="text-2xl sm:text-3xl font-bold font-merienda"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Sasikumar
          </motion.h1>
        </NavLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          <li>
            <NavLink
              to="/"
              className="text-white font-semibold text-lg hover:text-blue-200"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className="text-white font-semibold text-lg hover:text-blue-200"
            >
              My Works
            </NavLink>
          </li>
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href="https://api.whatsapp.com/send?phone=6369499827"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 px-4 py-2 flex items-center gap-2 font-bold rounded-lg hover:bg-blue-50 transition"
          >
            <FaWhatsapp className="text-xl" />
            Whatsapp
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="block md:hidden">
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: menuOpen ? 180 : 0 }}
            className="text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <RxCross1 className="text-2xl" />
            ) : (
              <RxHamburgerMenu className="text-2xl" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-blue-700"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <ul className="flex flex-col items-center gap-6 py-6">
              <li>
                <NavLink
                  to="/"
                  className="text-white text-lg font-semibold"
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className="text-white text-lg font-semibold"
                  onClick={closeMenu}
                >
                  My Works
                </NavLink>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=6369499827"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 px-4 py-2 flex items-center gap-2 font-bold rounded-lg"
                >
                  <FaWhatsapp className="text-xl" />
                  Whatsapp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
