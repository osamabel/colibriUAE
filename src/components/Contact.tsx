import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const templateParams = {
        to_name: "Khalil",
        from_name: formData.fullName,
        company: formData.company,
        reply_to: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      const response = await emailjs.send(
        "service_521wlku", // Replace with your Service ID
        "template_sv8kgyh", // Replace with your Template ID
        templateParams,
        "piSiFlyepcDK1FEYv" // Replace with your Public Key
      );

      if (response.status === 200) {
        alert("Message sent successfully!");
        setFormData({
          fullName: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message");
    }
  };
  return (
    <div className="w-full text-black py-16 min-h-screen flex items-center">
      <div className="max-w-[1240px] mx-auto w-[90%] flex flex-col lg:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold font-lalezar mb-6">
            A PROJECT, <br />A BRIEF?
          </h1>

          <p className="text-lg mb-10">
            Do you have a question for us?
            <br />
            Or would you like to create your own explanatory video?
            <br />
            Our team is ready to answer all your questions.
          </p>

          {/* Contact Details */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="icon-gradient">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">PHONE</h3>
                <p>(+971) 54 237 4802</p>
                <p>(+212) 06 10 11 79 10</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="icon-gradient">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">EMAIL</h3>
                <p>khalil@colibristudio.co</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="icon-gradient">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">ADRESSE</h3>
                <p>
                  Sharjah Media City  United Arab Emirates
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="icon-gradient">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">ADRESSE</h3>
                <p>
                  1 Bd Sidi Mohamed Ben Abdellah, <br/>Casablanca Morocco
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="lg:w-1/2 bg-[#0A0A0A] p-8 rounded-3xl">
          <h2 className="text-4xl text-white font-lalezar font-bold mb-8">
            TELL US MORE!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-white text-black"
              required
            />

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="w-full p-3 rounded-lg bg-white text-black"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-white text-black"
              required
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="w-full p-3 rounded-lg bg-white text-black"
              required
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              rows={4}
              className="w-full p-3 rounded-lg bg-white text-black"
              required
            />

            <button
              type="submit"
              className="w-full icon-gradient text-white py-4 px-8 font-semibold hover:bg-[#e6a600] transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
