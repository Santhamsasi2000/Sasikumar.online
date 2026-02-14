import WorksCard from "./WorksCard";

const OurWorks = () => {
  return (
    <section className="mt-20 p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
      
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl text-center font-neuton font-bold mb-2 sm:mb-3 text-gray-700">
        My Digital <span className="ms-2 text-blue-700">Creations</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg mb-8 text-gray-600">
        Take a look at some of my projects, all built using
        <span className="font-semibold"> React JS only</span>. Each website is
        fully responsive and created with clean code and modern design.
        Some projects may not include advanced SEO, animations, or performance
        features because
        <span className="font-semibold">
          {" "}clients had budget limitations or incomplete payments.
        </span>
      </p>

      {/* Projects */}
      <WorksCard />
    </section>
  );
};

export default OurWorks;
