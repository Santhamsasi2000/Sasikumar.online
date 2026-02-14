import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";

const badge ="Services";
const smallDesc = "Comprehensive web solutions designed to elevate your business and dominate search rankings.";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Services = () => {
  return (
     <motion.section 
     className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8"
     initial="hidden"
     whileInView="visible"
     viewport={{ once: true, amount: 0.2 }}
  >
        {/* Badge */}
       <motion.div 
        className="flex justify-center mb-1.5"
        variants={fadeUp}>
          <span className="bg-blue-50 border-1 border-blue-200 
          px-4 py-1 rounded-4xl text-blue-600 font-semibold">
            {badge}
          </span>
       </motion.div>  

       {/* title */}
       <motion.h2 className='text-gray-700 capitalize text-center 
       text-3xl sm:text-4xl font-bold mb-2 font-neuton'
       variants={fadeUp}>
        What I can do for your business
       </motion.h2>

       {/* subtitle */}
       <motion.p 
        className='mb-5 sm:mb-6 text-center text-sm sm:text-base text-gray-600'
        variants={fadeUp}>
        {smallDesc}
       </motion.p>
       
       {/* Grid - Two Services */}
       <motion.div 
       className="flex gap-5 xl:gap-10 justify-center flex-wrap"
       variants={stagger}>
      {
        services.map(({ id, image, title, desc, qualities}) => (
        <motion.div className="w-full sm:w-[48%]" key={id}
         variants={fadeUp}
         whileHover={{ y: -6, scale: 1.02 }}
         transition={{ type: "spring", stiffness: 200 }}>
          <div className="rounded-2xl shadow-xl/30 h-full
          flex flex-col p-4 md:p-5">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <LazyLoadImage src={image} className="rounded-xl w-20 h-20 mb-1"/>
            </motion.div>
            <h2 className="text-blue-900 font-bold text-xl mb-2">{title}</h2>
            <p className="text-gray-700 text-sm sm:text-base mb-3">{desc}</p>
            <ul className="mb-3">
              {
                qualities.map(({content }, index ) => (
                    <motion.li key={index} 
                    className="flex items-center gap-2 mb-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}>
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span className="text-sm sm:text-base">{content}</span>
                    </motion.li>
                ))
              }
            </ul>
          </div>
        </motion.div>
        ))
      }
       </motion.div>
     </motion.section>
  )
}

export default Services

const services = [
  {
    id: 1,
    image: "/images/Home/Services/website-development.png",
    title: "Website Development",
    desc: "Custom websites built with React.js and Tailwind CSS. Responsive, modern, and scalable solutions tailored to your business needs.",
    qualities: [
      {
        content: "Responsive UI Design",
      },
      {
        content: "SEO-Ready Structure",
      },
      {
        content: "Fast Loading Performance",
      },
    ]
  },
  {
    id: 2,
    image: "/images/Home/Services/search-engine-optimization.png",
    title: "SEO Optimization",
    desc: "Comprehensive SEO services to improve your website's visibility and ranking in search engines.",
    qualities: [
      {
        content: "Technical SEO Audit",
      },
      {
        content: "Keyword Strategy",
      },
      {
        content: "Site Speed Optimization",
      },
    ]
  },
];
