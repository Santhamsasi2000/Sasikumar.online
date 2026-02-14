import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

// Framer Motion
import { motion } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Animation Variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const LatestWorks = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8"
    >
      {/* Badge */}
      <motion.div
        variants={fadeUp}
        className="flex justify-center mb-1.5"
      >
        <span
          className="bg-blue-50 border-1 border-blue-200 
          px-4 py-1 rounded-4xl text-blue-600 font-semibold"
        >
          Portfolio
        </span>
      </motion.div>

      {/* Title */}
      <motion.h2
        variants={fadeUp}
        className="text-gray-700 capitalize text-center 
        text-3xl sm:text-4xl font-bold mb-2 font-neuton"
      >
        My Latest Works
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp}
        className="mb-5 sm:mb-6 text-center text-sm sm:text-base text-gray-700"
      >
        Browse through my recent projects and see how we&apos;ve helped
        businesses transform their digital presence.
      </motion.p>

      {/* Auto Carousel */}
      <motion.div variants={fadeUp}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          loop={true}
        >
          {myWorks.map(({ id, img }) => (
            <SwiperSlide key={id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex justify-center"
              >
                <LazyLoadImage
                  src={img}
                  alt="Project preview"
                  effect="blur"
                  threshold={200}
                  className="w-full h-[250px] object-cover rounded-2xl shadow-lg"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* View All Projects Button */}
      <motion.div
        variants={fadeUp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex justify-center mt-5 sm:mt-10"
      >
        <NavLink
          to="/projects"
          className="bg-blue-600 text-white px-6 py-2 
          flex items-center gap-2 rounded-lg"
        >
          View All Projects <FaArrowRight className="text-xl" />
        </NavLink>
      </motion.div>
    </motion.section>
  );
};

export default LatestWorks;

// Project Images
const myWorks = [
  { id: 8, img: "/images/Projects/srimonitech.png" },
  { id: 7, img: "/images/Projects/ceo-career-educators-overseas.webp" },
  { id: 6, img: "/images/Projects/craft-time.jpg" },
  { id: 5, img: "/images/Projects/problem-solving.jpg" },
  { id: 4, img: "/images/Projects/sabari-hospital.jpg" },
  { id: 3, img: "/images/Projects/donbosco-school.webp" },
  { id: 2, img: "/images/Projects/shanthiRani-school.webp" },
  { id: 1, img: "/images/Projects/ashokraj-groups.jpg" },
];
