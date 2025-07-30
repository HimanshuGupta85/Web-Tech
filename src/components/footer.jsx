/* eslint-disable no-unused-vars */
// components/Footer.js
import React from "react";
import "../App.css"; // Importing custom styles
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    //   <footer className="footer">
    //     <div className="footer-content">
    //       <div className="social-icons">
    //         <a href="https://github.com" target="_blank" rel="noopener noreferrer">
    //           <FaGithub />
    //         </a>
    //         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    //           <FaLinkedin />
    //         </a>
    //         <a href="mailto:your@email.com">
    //           <FaEnvelope />
    //         </a>
    //       </div>
    //       <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    //     </div>
    //   </footer>
    // );

    <footer className="bg-gray-800">
      <div className="container mx-auto py-6 px-4 text-center text-gray-400">
        <p>&copy; 2025 Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
