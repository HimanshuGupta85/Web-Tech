/* eslint-disable react/prop-types */
import "../App.css"; // Importing custom styles
import React from "react";

const NavBar = () => {
  const [activeSection, setActiveSection] = React.useState("home");
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  // State to manage form input data

  // Effect to handle scroll-based active section highlighting
  React.useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Helper component for navigation links
  const NavLink = ({ section, children }) => (
    <a
      href={`#${section}`}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        activeSection === section
          ? "text-white bg-teal-500"
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      }`}
      onClick={() => setIsMenuOpen(false)}
    >
      {children}
    </a>
  );

  return (
    <>
      <header className="bg-gray-800/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow-lg">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#home" className="text-2xl font-bold text-white">
                <span className="text-teal-400">My</span>Portfolio
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink section="home">Home</NavLink>
                <NavLink section="about">About</NavLink>
                <NavLink section="projects">Projects</NavLink>
                <NavLink section="contact">Contact</NavLink>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon for menu - hamburger or close */}
                {isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink section="home">Home</NavLink>
              <NavLink section="about">About</NavLink>
              <NavLink section="projects">Projects</NavLink>
              <NavLink section="contact">Contact</NavLink>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default NavBar;
