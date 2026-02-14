import { FaLaptopCode, FaWhatsapp } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const subtitle =
  "I create fast, modern, and SEO-friendly websites to help businesses grow. Specializing in custom solutions with React, Tailwind CSS, and full-stack development.";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const HeroDesktop = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="hidden lg:block lg:p-7 xl:p-9 2xl:p-10 mt-20"
    >
      <div className="flex flex-wrap justify-between items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          className="w-[55%] xl:w-[50%]"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="flex mb-3"
          >
            <span
              className="bg-blue-50 border-1 border-blue-200 
              px-4 py-1 rounded-4xl text-blue-900 font-semibold 
              flex items-center gap-2"
            >
              <LazyLoadImage
                src="/images/Home/HeroCTA/hand-shake-icon.png"
                alt="Available for projects"
                className="w-8 h-8 animate-bounce"
              />
              Available for new projects
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl xl:text-6xl font-bold mb-3 sm:mb-5 font-neuton"
          >
            Hi, I&apos;m{" "}
            <span className="text-blue-600">Sasikumar</span>
            <br />
            Web Developer &{" "}
            <span className="text-blue-600">SEO Specialist</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-gray-700 font-medium text-lg xl:text-xl mb-5"
          >
            {subtitle}
          </motion.p>

          {/* Highlights */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-2 md:gap-5 mb-5"
          >
            {[
              "8+ Projects Delivered",
              "100% Custom Solutions",
              "SEO Optimized",
            ].map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <p>{item}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex gap-5 xs:gap-7 mb-5"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to="/projects"
                className="flex items-center gap-2 bg-blue-600 
                text-white px-5 xs:px-6 py-2 rounded-lg"
              >
                <FaLaptopCode className="text-lg" />
                View My Work
              </NavLink>
            </motion.div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://api.whatsapp.com/send?phone=6369499827"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-blue-600 
              text-blue-700 px-5 xs:px-6 py-2 rounded-lg"
              aria-label="Contact on WhatsApp"
            >
              <FaWhatsapp className="text-lg" />
              Hire Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-[45%] xl:w-[40%]"
        >
          <LazyLoadImage
            src="/images/Home/HeroCTA/hero-img-5.jpg"
            alt="Web Developer Hero"
            className="rounded-2xl shadow-xl"
            effect="blur"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroDesktop;
