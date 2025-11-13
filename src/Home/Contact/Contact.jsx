import { BiMap } from "react-icons/bi";
import { FaLinkedinIn, FaMobileAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import ContactUsForm from "./ContactForm/ContactUsForm";

const subTitle = "Ready to start your next project? I'd love to hear about your ideas and help bring them to life.";

const Contact = () => {
  return (
    <section className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 2xl:p-9">

        {/* Badge */}
        <div className="flex justify-center mb-1.5">
          <span className="bg-blue-50 border-1 border-blue-200 
           px-4 py-1 rounded-4xl text-blue-600 font-semibold">
            Contact
          </span>
        </div> 

        {/* Title */}
        <h2 className="font-bold text-3xl sm:text-4xl mb-4 text-center
         text-gray-700 font-neuton capitalize">
          Let's build something amazing together
        </h2>
        
        
        {/* Subtitle */}
        <p className="text-center text-gray-600 text-sm sm:text-base mb-6">
          {subTitle}
        </p>
        
        {/* Grid */}
        <div className="flex justify-center md:justify-between gap-8 md:gap-0 flex-wrap">
          <div className="w-full xs:w-[80%] md:w-[40%] lg:w-[35%]">

            {/* title */}
            <h4 className="sm:text-center md:text-start font-bold text-2xl 
            sm:text-[26px] mb-1 md:mb-2 text-blue-800">
              Get in Touch
            </h4>

            {/* Subtitle */}
            <p className="text-sm sm:text-base sm:text-center md:text-start text-gray-600 mb-4">
              Have a project in mind? Let's discuss how I can help your business grow.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col items-center gap-6 w-full">
                {contactInfo.map(({ id, icon: Icon, name, detail, link }) => (
                <div key={id} className="w-full shadow p-4 rounded-xl flex gap-3 items-center bg-gray-50">
                    <i className="text-white bg-blue-600 p-3 rounded-xl">
                        <Icon className="text-xl"/>
                    </i>
                    <div>
                        <h5 className="font-bold text-gray-700">{name}</h5>
                        {link ? (
                            <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:underline hover:text-teal-800"
                            >
                            <span>{detail}</span>
                            </a>
                        ) : (
                            <span className="text-gray-700">{detail}</span>
                        )}
                    </div>
                </div>
                ))}
            </div>
          </div>
          {/* ===  Form  ==== */}
          <div className="w-full xs:w-[80%] md:w-[50%] lg:w-[55%]">
            <ContactUsForm/>
          </div>
        </div>
    </section>
  )
};

export default Contact



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
        detail: "+91-6384379814",
        link: "tel:6384379814",
    },
    // {
    //     id: 3,
    //     icon: FaLinkedinIn,
    //     name: "LinkedIn",
    //     detail: "linkedin.com/in/sadakas",
    //     link: "https://www.linkedin.com/in/sadakas/",
    // },
    {
        id: 4,
        icon: BiMap,
        name: "location",
        detail: "Chennai, Tamil Nadu, India",
    },
];
