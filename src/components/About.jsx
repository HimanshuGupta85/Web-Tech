/* eslint-disable react/no-unescaped-entities */

import "../App.css"; // Importing custom styles

const About = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#fff]">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 text-center group">
              <img
                src="https://placehold.co/400x400/1f2937/7dd3fc?text=JD"
                alt="Your Name"
                className="rounded-full w-64 h-64 mx-auto shadow-lg border-4 border-teal-400 transition-all duration-500 transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-teal-400/50 group-hover:rotate-3"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-300 mb-4">
                I am a passionate and creative developer with a knack for
                building elegant and user-friendly web applications. With a
                strong foundation in modern frontend technologies like React and
                a keen eye for design, I strive to create seamless digital
                experiences.
              </p>
              <p className="text-gray-300">
                My goal is to not only write clean and efficient code but also
                to craft interfaces that are intuitive, engaging, and accessible
                to everyone. I'm always eager to learn new things and take on
                challenging projects.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">My Skills</h3>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-gray-700 text-teal-300 px-4 py-2 rounded-full">
                    React
                  </span>
                  <span className="bg-gray-700 text-teal-300 px-4 py-2 rounded-full">
                    JavaScript (ES6+)
                  </span>
                  <span className="bg-gray-700 text-teal-300 px-4 py-2 rounded-full">
                    Tailwind CSS
                  </span>
                  <span className="bg-gray-700 text-teal-300 px-4 py-2 rounded-full">
                    HTML5 & CSS3
                  </span>
                  <span className="bg-gray-700 text-teal-300 px-4 py-2 rounded-full">
                    Node.js
                  </span>
                  <span className="bg-gray-700 text-teal-300 px-4 py-2 rounded-full">
                    Responsive Design
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
