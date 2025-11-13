
const ChooseMe = () => {
  return (
    <section className="px-4 px-sm-4 px-md-5 py-5 bg-gray-100">

      {/* Badge */}
      <div className="flex justify-center mb-1.5">
        <span className="bg-blue-50 border-1 border-blue-200 
        px-4 py-1 rounded-4xl text-blue-600 font-semibold">
            Why Choose Me
        </span>
      </div> 

       {/* title */}
       <h2 className="text-gray-700 font-neuton capitalize mb-2 text-center 
       text-3xl sm:text-4xl font-bold">
            What makes me different
       </h2>

       {/* Small Desc */}
       <p className="mb-5 sm:mb-6 text-center text-sm sm:text-base text-gray-600">
        Unlike WordPress developers, 
        I build custom solutions that are fast, secure, and perfectly 
        tailored to your needs
       </p>
       
       {/* Grid */}
       <div className="flex flex-wrap justify-between xs:gap-7">
        {
           DataChooseMe.map(({ id, title, smallDesc })=>(
            <div className="w-[45%] md:w-[22%]">
              <div className="rounded-xl p-4 
              h-full" key={id}>
                <h4 className="font-bold text-4xl sm:text-5xl text-blue-800 mb-1 text-center font-neuton">
                {title}
                </h4>
                <p className="text-sm sm:text-base text-center text-gray-600">{smallDesc}</p>
              </div>
            </div>
           ))
        }
       </div>
    </section>
  )
}

export default ChooseMe

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
]
