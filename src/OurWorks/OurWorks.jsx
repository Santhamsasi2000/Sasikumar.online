import WorksCard from "./WorksCard";

const title = "My Digital Creations";
const OurWorks = () => {
  return (
    <section className="mt-20 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
       {/*Page title */}
       {/* <h1 className="text-3xl sm:text-4xl text-center text-blue-700 
       font-neuton font-bold mb-2 sm:mb-3">
         {title}
       </h1> */}

       <h1 className="text-3xl sm:text-4xl text-center 
       font-neuton font-bold mb-2 sm:mb-3 text-gray-700">
         My Digital 
         <span className="ms-2 text-blue-700">Creations</span>
       </h1>

       {/* subtitle */}
      <p className="text-sm sm:text-base mb-8 text-gray-600">Take a look at some of my projects, all built using 
        <span className="font-semibold"> React JS Only</span>. Each website is fully responsive and made with clean code and modern design. A few projects may not have advanced SEO, animations, or performance features because 
        <span className="font-semibold"> the clients had budget limits or didn’t complete payment.</span>
      </p>
      
       {/* Projects List */}
       <WorksCard/>
    </section>
  )
}

export default OurWorks
