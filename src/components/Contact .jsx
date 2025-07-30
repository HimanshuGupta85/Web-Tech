import React from "react";
import "../App.css"; // Importing custom styles
const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  // State to track form submission status
  const [formStatus, setFormStatus] = React.useState("");

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Error: Please fill in all fields.");
      return;
    }
    setFormStatus("Sending...");

    // Simulate API call to a backend
    setTimeout(() => {
      console.log("Form data submitted:", formData);
      // Simulate success
      setFormStatus(
        `Success! Thank you, ${formData.name}. An email has been sent to ${formData.email}.`
      );
      // Simulate auto-generated email to client
      console.log(
        `Simulating email to ${formData.email}: Thank you for your message! I will get back to you shortly.`
      );
      // Clear the form
      setFormData({ name: "", email: "", message: "" });

      // Reset status message after a few seconds
      setTimeout(() => setFormStatus(""), 5000);
    }, 2000);
  };

  return (
    <>
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#fff]">Contact Me</h2>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm py-3 px-4 text-white focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
            {formStatus && (
              <div
                className={`mt-6 text-center p-4 rounded-md ${
                  formStatus.startsWith("Error")
                    ? "bg-red-500/20 text-red-300"
                    : "bg-green-500/20 text-green-300"
                }`}
              >
                {formStatus}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
