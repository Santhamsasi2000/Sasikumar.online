import { BiMap } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import ContactUsForm from "./ContactForm/ContactUsForm";

const subTitle =
  "Ready to start your next project? I'd love to hear about your ideas and help bring them to life.";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-9"
    >
      {/* Badge */}
      <motion.div variants={fadeUp} className="flex justify-center mb-2">
        <span className="bg-blue-50 shadow px-5 py-1 rounded-4xl text-blue-800 font-semibold text-lg">
          Contact
        </span>
      </motion.div>

      {/* Title */}
      <motion.h2
        variants={fadeUp}
        className="font-bold text-3xl sm:text-4xl mb-4 text-center
        text-gray-700 font-neuton capitalize"
      >
        Let's build something amazing together
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp}
        className="text-center text-gray-600 text-base sm:text-lg mb-8"
      >
        {subTitle}
      </motion.p>

      {/* Grid */}
      <div className="flex justify-center md:justify-between gap-8 md:gap-0 flex-wrap">
        {/* Contact Info */}
        <motion.div
          variants={fadeUp}
          className="w-full xs:w-[80%] md:w-[40%] lg:w-[35%]"
        >
          <h4 className="sm:text-center md:text-start font-bold text-2xl sm:text-3xl
          mb-1 md:mb-2 text-blue-800">
            Get in Touch
          </h4>

          <p className="text-base sm:text-lg sm:text-center md:text-start text-gray-600 mb-4">
            Have a project in mind? Let's discuss how I can help your business grow.
          </p>

          <div className="flex flex-col items-center gap-6 w-full">
            {contactInfo.map(({ id, icon: Icon, name, detail, link }) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-full shadow p-4 rounded-xl flex gap-3 items-center bg-gray-50"
              >
                <i className="text-white bg-blue-600 p-3 rounded-xl">
                  <Icon className="text-xl" />
                </i>
                <div>
                  <h5 className="font-bold text-gray-700">{name}</h5>
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:underline hover:text-blue-800"
                    >
                      {detail}
                    </a>
                  ) : (
                    <span className="text-gray-700">{detail}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={fadeUp}
          className="w-full xs:w-[80%] md:w-[50%] lg:w-[55%]"
        >
          <ContactUsForm />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;

const contactInfo = [
  {
    id: 1,
    icon: FiMail,
    name: "Email",
    detail: "contact@sasikumar.online",
    link: "mailto:contact@sasikumar.online",
  },
  {
    id: 2,
    icon: FaMobileAlt,
    name: "Mobile Number",
    detail: "+91-6369499827",
    link: "tel:6369499827",
  },
  {
    id: 3,
    icon: BiMap,
    name: "Location",
    detail: "Chennai, Tamil Nadu, India",
  },
];
