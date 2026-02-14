import { FaLaptopCode, FaWhatsapp } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const subtitle =
  "I create fast, modern, and SEO-friendly websites to help businesses grow. Specializing in custom solutions with React, Tailwind CSS, and full-stack development.";

const HeroMobile = () => {
  return (
    <section className="relative mt-20 lg:hidden h-[520px] xs:h-[600px] flex items-center bg-white">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <LazyLoadImage
          src="/images/Home/HeroCTA/hero-img-5.jpg"
          alt="Web Developer working on laptop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 px-5 xs:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Badge */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-1 rounded-full text-blue-900 font-semibold">
            <LazyLoadImage
              src="/images/Home/HeroCTA/hand-shake-icon.png"
              alt="Available icon"
              className="w-6 h-6 animate-bounce"
            />
            Available for new projects
          </span>
        </div>

        {/* Title */}
        <motion.h1
          className="text-gray-900 font-bold font-neuton text-3xl xs:text-4xl sm:text-5xl leading-tight mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hi, I'm <span className="text-blue-700">Sasikumar</span>
          <br />
          Web Developer &{" "}
          <span className="text-blue-700">SEO Specialist</span>
        </motion.h1>

        {/* Subtitle */}
        <p className="text-gray-700 font-medium text-base sm:text-lg mb-5">
          {subtitle}
        </p>

        {/* Highlights */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 text-gray-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
            <p>8+ Projects Delivered</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
            <p>100% Custom Solutions</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
            <p>SEO Optimized</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <NavLink
            to="/projects"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
          >
            <FaLaptopCode />
            View My Work
          </NavLink>

          <a
            href="https://api.whatsapp.com/send?phone=6369499827"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-blue-600 text-blue-700 hover:bg-blue-50 px-5 py-2 rounded-lg transition"
            aria-label="Hire me on WhatsApp"
          >
            <FaWhatsapp />
            Hire Me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroMobile;
