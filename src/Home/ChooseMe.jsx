
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ChooseMe = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="px-4 sm:px-4 md:px-5 py-5 bg-gray-50"
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
          Why Choose Me
        </span>
      </motion.div>

      {/* Title */}
      <motion.h2
        variants={fadeUp}
        className="text-gray-700 font-neuton capitalize mb-2 text-center 
        text-3xl sm:text-4xl font-bold"
      >
        What makes me different
      </motion.h2>

      {/* Small Desc */}
      <motion.p
        variants={fadeUp}
        className="mb-5 sm:mb-6 text-center text-sm sm:text-base text-gray-600"
      >
        Unlike WordPress developers, I build custom solutions that are fast,
        secure, and perfectly tailored to your needs.
      </motion.p>

      {/* Grid */}
      <motion.div
        variants={stagger}
        className="flex flex-wrap justify-between gap-6 xs:gap-7"
      >
        {DataChooseMe.map(({ id, title, smallDesc }) => (
          <motion.div
            key={id}
            variants={fadeUp}
            whileHover={{ scale: 1.05, y: -6 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-[45%] md:w-[22%]"
          >
            <div className="rounded-xl p-4 h-full bg-white shadow-md">
              <h4
                className="font-bold text-4xl sm:text-5xl text-blue-800 
                mb-1 text-center font-neuton"
              >
                {title}
              </h4>
              <p className="text-sm sm:text-base text-center text-gray-600">
                {smallDesc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ChooseMe;

const DataChooseMe = [
  {
    id: 1,
    title: "8+",
    smallDesc: "Projects Completed",
  },
  {
    id: 2,
    title: "100%",
    smallDesc: "Client Satisfaction",
  },
  {
    id: 3,
    title: "95+",
    smallDesc: "Average PageSpeed",
  },
  {
    id: 4,
    title: "A+",
    smallDesc: "Code Quality",
  },
];



