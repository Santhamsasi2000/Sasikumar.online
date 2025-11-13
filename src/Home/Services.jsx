import { FaBolt, FaCogs, FaKey, FaMobileAlt, FaSearch, FaTachometerAlt } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";

const badge ="Services";
const smallDesc = "Comprehensive web solutions designed to elevate your business and dominate search rankings.";

const Services = () => {
  return (
     <section className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
        {/* Badge */}
       <div className="flex justify-center mb-1.5">
          <span className="bg-blue-50 border-1 border-blue-200 
          px-4 py-1 rounded-4xl text-blue-600 font-semibold">
            {badge}
          </span>
       </div>  

       {/* title */}
       <h2 className='text-gray-700 capitalize text-center 
       text-3xl sm:text-4xl font-bold mb-2 font-neuton'>
        What I can do for your business
       </h2>

       {/* subtitle */}
       <p className='mb-5 sm:mb-6 text-center text-sm sm:text-base text-gray-600'>
        {smallDesc}
       </p>
       
       {/* Grid - Two Services */}
       <div className="flex gap-5 xl:gap-10 justify-center flex-wrap">
      {
        services.map(({ id, image, title, desc, qualities}) => (
        <div className="w-full sm:w-[48%]" key={id}>
          <div className="rounded-2xl shadow-xl/30 h-full
          flex flex-col p-4 md:p-5">
            <LazyLoadImage src={image} className="rounded-xl w-20 h-20 mb-1"/>
            <h2 className="text-blue-900 font-bold text-xl mb-2">{title}</h2>
            <p className="text-gray-700 text-sm sm:text-base mb-3">{desc}</p>
            <ul className="mb-3">
              {
                qualities.map(({content }, index ) => (
                    <li key={index} className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span className="text-sm sm:text-base">{content}</span>
                    </li>
                ))
              }
            </ul>
          </div>
        </div>
        ))
      }
       </div>
    </section>
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
