import { FaMapMarkerAlt, FaHandPointRight } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { DataWorks } from "./DataWorks";

const WorksCard = () => {
  return (
    <>
      {DataWorks.map(
        (
          { websiteType, image, title, desc, techStack, location, weblink },
          index
        ) => (
          <div
            key={index}
            className="flex flex-wrap justify-center items-center gap-5 sm:gap-8 mb-10 sm:mb-15"
          >
            {/* Image */}
            <div className="w-full sm:w-[80%] lg:w-[45%]">
              <LazyLoadImage
                src={image}
                alt={`${title} website preview`}
                className="w-full h-auto aspect-[3/2] rounded-xl"
                effect="blur"
                threshold={200}
              />
            </div>

            {/* Content */}
            <div className="w-full sm:w-[80%] lg:w-[45%]">
              
              {/* Badge */}
              <span className="bg-gray-100 border-2 border-gray-200 inline-block px-4 py-0.5 rounded-4xl text-gray-800 font-semibold mb-2">
                {websiteType}
              </span>

              {/* Title */}
              <h2 className="mb-2 text-blue-800 font-bold text-xl">
                {title}
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 mb-3">
                {desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-3">
                {techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 px-2 py-0.5 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-700 mb-4">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>{location}</span>
              </div>

              {/* Button */}
              <a
                href={weblink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg text-white"
                aria-label={`Visit ${title} website`}
              >
                <FaHandPointRight className="text-lg" />
                Check out the website
              </a>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default WorksCard;
