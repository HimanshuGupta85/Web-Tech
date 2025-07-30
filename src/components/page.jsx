/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import "../css/page.css";
import { useForm } from "react-hook-form"

const Page = () => {

const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

    const onSubmit = (data) => console.log(data);

  return (
    <>
      {/* <!-- Header --> */}
      <header>
        <div className="container">
          <nav>
            <a href="#" className="logo">
              Alex<span style={{ color: "var(--secondary)" }}>.</span>
            </a>
            <ul className="nav-links">
              <li>
                <a href="#home" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <div className="hamburger">
              <i className="fas fa-bars"></i>
            </div>
          </nav>
        </div>
      </header>

      {/* <!-- Hero Section --> */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>
              Hi, I'm <span>Alex Morgan</span>
            </h1>
            <p>
              A passionate frontend developer creating beautiful and functional
              web experiences. I specialize in creating responsive websites with
              modern design principles.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="circle">
              <div className="circle-inner">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Alex Morgan"
                  className="profile-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-title">
            <h2>About Me</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Frontend Developer & UI/UX Designer</h3>
              <p>
                Hello! I'm Alex, a passionate frontend developer with a strong
                focus on creating beautiful, responsive, and user-friendly
                websites. With over 5 years of experience in the industry, I've
                worked on a variety of projects ranging from small business
                websites to complex web applications.
              </p>
              <p>
                I believe in clean code, modern design principles, and creating
                experiences that users love. When I'm not coding, you can find
                me exploring new technologies, contributing to open-source
                projects, or enjoying outdoor activities.
              </p>
            </div>
            <div className="skills">
              <h3>My Skills</h3>
              <div className="skill">
                <div className="skill-name">
                  <span>HTML/CSS</span>
                  <span>95%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="95"></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">
                  <span>JavaScript</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="90"></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">
                  <span>React</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="85"></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">
                  <span>UI/UX Design</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="80"></div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-name">
                  <span>Node.js</span>
                  <span>75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress" data-width="75"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Projects Section --> */}
      <section className="projects" id="projects">
        <div className="container">
          <div className="section-title">
            <h2>My Projects</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="E-commerce Website"
                className="project-img"
              />
              <div className="project-content">
                <h3>E-commerce Website</h3>
                <p>
                  A fully responsive e-commerce platform with product filtering,
                  cart functionality, and secure checkout.
                </p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="#">
                    <i className="fas fa-link"></i> Live Demo
                  </a>
                  <a href="#">
                    <i className="fab fa-github"></i> Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Task Management App"
                className="project-img"
              />
              <div className="project-content">
                <h3>Task Management App</h3>
                <p>
                  A productivity app that helps users organize tasks with
                  drag-and-drop functionality and reminders.
                </p>
                <div className="project-tags">
                  <span className="tag">Vue.js</span>
                  <span className="tag">Firebase</span>
                  <span className="tag">Tailwind CSS</span>
                </div>
                <div className="project-links">
                  <a href="#">
                    <i className="fas fa-link"></i> Live Demo
                  </a>
                  <a href="#">
                    <i className="fab fa-github"></i> Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Weather Dashboard"
                className="project-img"
              />
              <div className="project-content">
                <h3>Weather Dashboard</h3>
                <p>
                  A weather application that provides real-time forecasts using
                  a third-party API with location detection.
                </p>
                <div className="project-tags">
                  <span className="tag">JavaScript</span>
                  <span className="tag">API</span>
                  <span className="tag">Chart.js</span>
                </div>
                <div className="project-links">
                  <a href="#">
                    <i className="fas fa-link"></i> Live Demo
                  </a>
                  <a href="#">
                    <i className="fab fa-github"></i> Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Me</h2>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Get In Touch</h3>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>San Francisco, CA, USA</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>alex.morgan@example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="contact-text">
                  <h4>Website</h4>
                  <p>www.alexmorgan.dev</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Your Name"
                    
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control"
                    placeholder="Subject"
                    
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    className="form-control"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <a href="#" className="footer-logo">
                Alex<span style={{ color: "var(--primary)" }}>.</span>
              </a>
              <p>
                Creating beautiful and functional web experiences with a focus
                on user experience and modern design principles.
              </p>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">UI/UX Design</a>
                </li>
                <li>
                  <a href="#">Responsive Design</a>
                </li>
                <li>
                  <a href="#">E-commerce Solutions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 Alex Morgan. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* <!-- Toast Notification --> */}
      <div className="toast" id="toast">
        <i className="fas fa-check-circle"></i>
        <span>Message sent successfully!</span>
      </div>

      <script src="../script/script.js"></script>
    </>
  );
};
export default Page;
