import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 max-w-[800px] w-[90%] relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    service: 'motion',
    duration: '30',
    language: 'ar',
    description: '',
    fullName: '',
    company: '',
    phone: '',
    email: '',
    script: false,
    voiceOver: false,
    illustrationAnimation: false,
    subtitles: false
  });

  const handleChange = (e: any) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await emailjs.send(
        'service_521wlku',
        'template_oyacvh6',
        {
          ...formData,
          additional_services: `
            Script: ${formData.script ? 'Yes' : 'No'}
            Voice Over: ${formData.voiceOver ? 'Yes' : 'No'}
            Illustration/Animation: ${formData.illustrationAnimation ? 'Yes' : 'No'}
            Subtitles: ${formData.subtitles ? 'Yes' : 'No'}
          `
        },
        'piSiFlyepcDK1FEYv'
      );
      if (response.status === 200) alert('Quote sent successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending quote');
    }
  };

  return (
    <div className="flex flex-col gap-6 text-black">
      <div className="text-center flex flex-col items-center">
        <div className="font-lalezar md:text-[40px] leading-[20px] text-[20px]">
          TOGETHER, <span className="cf-gradient-span">LET'S CREATE MAGIC!</span>
        </div>
        <p className="text-black md:text-[16px] text-[14px] w-[80%]">
          Ready to bring your project to life? Fill out our form to create a magical visual experience.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="font-[800] block text-sm text-black mb-1">Service Selection</label>
          <select name="service" value={formData.service} onChange={handleChange} className="w-full p-2 border rounded-md">
            <option value="">Select a service</option>
            <option value="motion">Motion Design</option>
            <option value="animation">Animation</option>
            <option value="socialmedia">Social Media Advertising</option>
          </select>
        </div>

        <div className="flex flex-wrap justify-between my-[10px] gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              name="script" 
              checked={formData.script} 
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span>Script</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              name="voiceOver" 
              checked={formData.voiceOver} 
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span>Voice Over</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              name="illustrationAnimation" 
              checked={formData.illustrationAnimation} 
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span>Illustration/Animation</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="checkbox" 
              name="subtitles" 
              checked={formData.subtitles} 
              onChange={handleChange}
              className="form-checkbox h-4 w-4 text-blue-600"
            />
            <span>Subtitles</span>
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-[800] block text-sm text-gray-700 mb-1">Video Duration</label>
            <select name="duration" value={formData.duration} onChange={handleChange} className="w-full p-2 border rounded-md">
              {[30, 60, 90, 120, 150, 180, 210, 240].map(seconds => (
                <option key={seconds} value={seconds}>{seconds} seconds</option>
              ))}
              <option value="plus">More than 240 seconds</option>
            </select>
          </div>
          <div>
            <label className="font-[800] block text-sm text-gray-700 mb-1">Video Language</label>
            <select name="language" value={formData.language} onChange={handleChange} className="w-full p-2 border rounded-md">
              <option value="">Select a language</option>
              <option value="ar">Arabic</option>
              <option value="fr">French</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
          </div>
        </div>

        <div>
          <label className="font-[800] block text-sm text-gray-700 mb-1">Project Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md md:min-h-[100px] min-h-[60px]"
            placeholder="Describe your project, objectives, and expectations"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-[800] block text-sm text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Your first and last name"
            />
          </div>
          <div>
            <label className="font-[800] block text-sm text-gray-700 mb-1">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Company name"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-[800] block text-sm text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="+1 XXX XXX XXXX"
            />
          </div>
          <div>
            <label className="font-[800] block text-sm text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="youremail@example.com"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 icon-gradient text-white py-3 px-6 rounded-md hover:bg-[#e6a600] transition-colors"
        >
          Let's Get Started!
        </button>
      </form>
    </div>
  );
};

function Demand() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button
        className="icon-gradient !py-[14px] !px-[36px] font-Poppins text-white"
        onClick={() => setIsModalOpen(true)}
      >
        Request a Quote
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <QuoteForm />
      </Modal>
    </div>
  );
}

export default Demand;