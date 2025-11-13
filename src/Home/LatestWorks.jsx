import { LazyLoadImage } from "react-lazy-load-image-component"
import { NavLink } from "react-router-dom";
import { FaArrowRight, FaCircleArrowRight } from "react-icons/fa6";
// Carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const LatestWorks = () => {
  return (
    <section className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
        {/* Badge */}
        <div className="flex justify-center mb-1.5">
          <span className="bg-blue-50 border-1 border-blue-200 
          px-4 py-1 rounded-4xl text-blue-600 font-semibold">
            Portfolio
          </span>
        </div> 

       {/* title */}
       <h2 className='text-gray-700 capitalize text-center 
       text-3xl sm:text-4xl font-bold mb-2 font-neuton'>
        My Latest Works
       </h2>

       {/* subtitle */}
       <p className='mb-5 sm:mb-6 text-center text-sm sm:text-base text-gray-700'>
        Browse through my recent projects and see how we've helped 
        businesses transform their digital presence.
       </p>
       
       {/* Auto Carousel */}
       <Swiper
	        modules={[Autoplay]}
	        autoplay={{ delay: 1000, disableOnInteraction: false }}
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
            <div className="flex justify-center">
              <LazyLoadImage src={img} className="w-full h-[250px] rounded-2xl" effect="blur" threshold={200}/>
            </div>
          </SwiperSlide>
        ))}
       </Swiper>

       {/* Button - View All Projects*/}
       <div className="flex justify-center mt-5 sm:mt-10">
          <NavLink to="/projects" 
          className="bg-blue-600
           text-white px-6 py-2 flex items-center gap-2 rounded-lg">
            View All Projects <FaArrowRight className="text-xl"/>
          </NavLink>
       </div>
    </section>
  )
}

export default LatestWorks

const myWorks = [
  {
    id: 8,
    img: "/images/Projects/srimonitech.png",
  },
  {
    id: 7,
    img: "/images/Projects/ceo-career-educators-overseas.webp",
  },
  {
    id: 6,
    img: "/images/Projects/craft-time.jpg",
  },
  {
    id: 5,
    img: "/images/Projects/problem-solving.jpg",
  },
  {
    id: 4,
    img: "/images/Projects/sabari-hospital.jpg",
  },
  {
    id: 3,
    img: "/images/Projects/donbosco-school.webp",
  },
  {
    id: 2,
    img: "/images/Projects/shanthiRani-school.webp",
  },
  {
    id: 1,
    img: "/images/Projects/ashokraj-groups.jpg",
  },
]
