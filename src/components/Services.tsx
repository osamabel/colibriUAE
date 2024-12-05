import React, { useState } from "react";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Demand from "./Demand";

const services = [
  {
    id: 1,
    icon: "https://lottie.host/f3ecf0a4-0991-499b-9c99-c093343e88ac/cXXLzvJ8uM.lottie",
    title: "The Brief",
    gif: "",
    description:
      "At the beginning, tell us in detail about your project, your target audience, and the problem you want to solve through the explainer video.",
  },
  {
    id: 2,
    icon: "https://lottie.host/4e7cc899-9dc1-454d-bb8c-e5fafc5b73ae/OhBMoc5b7r.lottie",
    title: "Script Writing",
    gif: "",
    description:
      "We help you write your video, to tell your story in the best possible way.",
  },
  {
    id: 3,
    icon: null,
    title: "Storyboard",
    gif: "/gif/Storyboard.gif",
    description:
      "Once the script is approved by you, our experts will build the story scene by scene on a special board.",
  },
  {
    id: 4,
    icon: null,
    title: "Voice-over",
    gif: "/gif/Voice-over.gif",
    description:
      "According to your language choice, our talented voice actors will record the voice-over for your video to bring your story to life.",
  },
  {
    id: 5,
    icon: null,
    title: "Illustration",
    gif: "/gif/illustration.gif",
    description:
      "Your video begins to take shape as we design the characters, backgrounds, and add color to your story.",
  },
  {
    id: 6,
    icon: null,
    title: "Animation",
    gif: "/gif/animation.gif",
    description:
      "In this final step, our experts animate your illustrations to create the perfect video to present your service.",
  },
];

const ServiceCard = ({ service }: any) => {
  return (
    <div className="flex flex-col items-center p-6 text-center group hover:transform hover:scale-105 transition-transform duration-300">
      {/* Number Badge */}
      <div className="relative mb-6 w-full flex justify-center">
        <div className="cf-features-section-2-icon-wrap cf-absolute">
          <div className="cf-service-number !font-lalezar">{service.id}</div>
        </div>
        {
          service.icon ?
          <DotLottieReact src={service.icon} loop autoplay />
          :

          <img src={service.gif} alt="this slowpoke moves"  width="150" />
        }
      </div>

      {/* Content */}
      <h3 className="text-[30px] font-lalezar font-[800]">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed font-Poppins text-[16px]">
        {service.description}
      </p>
    </div>
  );
};

function Services() {

  return (
    <div className="text-black flex flex-col min-h-screen justify-center items-center py-[120px]">
      <div className="max-w-[1240px] mx-auto w-[90%] flex flex-col items-center gap-[0px]">
        <div className="relative h-full flex flex-col w-full  items-center text-center">
          <div className="flex flex-col text-center">
            <span className="leading-[50px] md:text-[71px] text-[50px] font-lalezar">A CLOSER LOOK</span>
            <span className="leading-[50px] md:text-[71px] text-[50px] font-lalezar">AT THE STEPS</span>
          </div>

          <p className="md:text-[16px] text-[14px] font-Poppins text-center md:w-[50%] w-[90%]">
          We have developed a simple 6-step process where you can make suggestions and request changes.
          </p>
        </div>
        <div className="py-[40px] px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Demand/>
    </div>
  );
}

export default Services;
