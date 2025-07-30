import "../App.css"; // Importing custom styles

const P = () => {
  return (
    <>
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#fff]">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card Example */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <img
                src="https://placehold.co/600x400/1f2937/7dd3fc?text=Project+1"
                alt="Project 1"
                className="w-full h-56 object-cover text-[#fff]"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#fff]">E-commerce Platform</h3>
                <p className="text-gray-400 mb-4">
                  A full-featured e-commerce site built with the MERN stack,
                  including payment gateway integration.
                </p>
                <a
                  href="#"
                  className="text-teal-400 hover:text-teal-300 font-semibold"
                >
                  View Details &rarr;
                </a>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <img
                src="https://placehold.co/600x400/1f2937/7dd3fc?text=Project+2"
                alt="Project 2"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#fff]">Task Management App</h3>
                <p className="text-gray-400 mb-4">
                  A collaborative task management tool with real-time updates
                  using Firebase.
                </p>
                <a
                  href="#"
                  className="text-teal-400 hover:text-teal-300 font-semibold"
                >
                  View Details &rarr;
                </a>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <img
                src="https://placehold.co/600x400/1f2937/7dd3fc?text=Project+2"
                alt="Project 2"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#fff]">Task Management App</h3>
                <p className="text-gray-400 mb-4">
                  A collaborative task management tool with real-time updates
                  using Firebase.
                </p>
                <a
                  href="#"
                  className="text-teal-400 hover:text-teal-300 font-semibold"
                >
                  View Details &rarr;
                </a>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
              <img
                src="https://placehold.co/600x400/1f2937/7dd3fc?text=Project+3"
                alt="Project 3"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#fff]">Personal Blog</h3>
                <p className="text-gray-400 mb-4">
                  A sleek, fast, and SEO-friendly personal blog built with
                  Next.js and a headless CMS.
                </p>
                <a
                  href="#"
                  className="text-teal-400 hover:text-teal-300 font-semibold"
                >
                  View Details &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default P;
