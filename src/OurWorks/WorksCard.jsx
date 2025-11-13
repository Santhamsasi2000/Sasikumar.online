import { FaMapMarkerAlt } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaHandPointRight } from "react-icons/fa";
import { DataWorks } from "./DataWorks";

const WorksCard = () => {
  return (
    <>
      {
        DataWorks.map(({ websiteType, image, title, desc, techStack, location, weblink}, index)=>(
        <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-8 mb-10 sm:mb-15"
        key={index}>
          {/* Image */}
          <div className="w-full sm:w-[80%] lg:w-[45%]">
            <LazyLoadImage src={image} alt={`${image} by Pogo Web Solutions`} 
            className='w-full h-auto aspect-[3/2] rounded-xl' effect='blur' threshold={200}/>
          </div>

          {/* content */}
          <div className="w-full sm:w-[80%] lg:w-[45%]">
            {/* Badge */}
            <div className="bg-gray-100 border-2 border-gray-200 inline-block
                  px-4 py-0.5 rounded-4xl text-gray-800 font-semibold mb-2">
                {websiteType}
            </div>

            {/* Title  */}
            <h2 className="mb-2 text-blue-800 font-bold text-xl">
              {title}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-600 mb-3">{desc}</p>
            
            {/* Tech Stack */}
            <div className="flex gap-2 mb-2">
            {
              techStack.map((tech, index) => (
                <div key={index} className="bg-gray-200 px-2 rounded">{tech}</div>
              ))
            }
            </div>

            {/*  */}
            <div className='flex items-center gap-1 my-3 mb-4'>
                <span className='text-lg text-blue-600'><FaMapMarkerAlt /></span>
                {location}
            </div>
            
            {/* Button */}
            <div className="mb-4 mb-md-0">
              <a href={weblink} className="inline-flex gap-2 items-center rounded-lg
               bg-blue-600 px-4 py-2 text-white" 
                target="_blank" rel="noopener noreferrer" 
                aria-label={`Check out the ${title} website`}>
                <FaHandPointRight className='text-lg'/>
                Check out the website
              </a>
            </div>
          </div>
        </div>
            ))
      }
    </>
  )
}

export default WorksCard;
