

import "../App.css"; // Importing custom styles

const Home = () => {
  return (
    <section
                id="home"
                className="min-h-screen flex items-center bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(13, 37, 63, 0.8), rgba(13, 37, 63, 0.8)), url('https://placehold.co/1920x1080/0d253f/e0e0e0?text=Welcome!')",
                }}
              >
                <div className="absolute inset-0 z-0"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                  <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                    Welcome to My Creative Space
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 mb-8">
                    I build beautiful and functional web experiences.
                  </p>
                  <a
                    href="#projects"
                    className="bg-teal-500 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-600 transition duration-300 text-lg"
                  >
                    View My Work
                  </a>
                </div>
              </section>
  );
};

export default Home;