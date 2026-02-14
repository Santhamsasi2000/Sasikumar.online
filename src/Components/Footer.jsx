import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-3 flex justify-center bg-blue-700"
    >
      <motion.p
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-white text-base sm:text-lg"
      >
        © {new Date().getFullYear()} Sasi Kumar. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
