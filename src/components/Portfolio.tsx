import { Eye } from 'lucide-react';
import React, { useState } from 'react';

const videos = [
    {
        title: "CAPACCES FINAL Arabe",
        company: "MBanque",
        link: "https://vimeo.com/944497206",
        thumbnail: "/portfolio/1.png",
    },
    {
        title: "MD WafaImmo V4",
        company: "Wafa Immobilier",
        link: "https://vimeo.com/875182109",
        thumbnail: "/portfolio/2.png",
    },
    {
        title: "UNDP",
        company: "halawiat Fatima",
        link: "https://vimeo.com/1036349148",
        thumbnail: "/portfolio/3.png",
    },
    {
        title: "Startup HRTech KWIKS",
        company: "KWIKS",
        link: "https://vimeo.com/1036349148",
        thumbnail: "/portfolio/4.png",
    }
];

const VideoLink = ({ video }: any) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        
        <div 
            className="relative group cursor-pointer overflow-hidden rounded-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
        <a target="_blank" href={video.link}>
            <div className="aspect-w-16 aspect-h-9">
                <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                <div className={`absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-2xl font-bold font-lalezar">{video.title}</h3>
                        <p className="text-lg text-gray-300">{video.company}</p>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Eye width={50} height={50}/>
                    </div>
                </div>
            </div>
    </a>
        </div>
    );
};

function Portfolio() {
    return (
        <div className="text-white bg-black flex flex-col pt-[100px] min-h-screen">
            <div className="max-w-[1240px] mx-auto w-[90%] py-[30px] flex flex-col items-center gap-[60px]">
                <div className="relative h-full flex flex-col w-full items-center text-center">
                    <div className="flex flex-col text-center">
                        <span className="leading-[30px] md:text-[71px] sm:text-[50px] text-[35px] font-lalezar">
                            SOME PROJECTS AND
                        </span>
                        <span className="cf-gradient-span md:!leading-[120px] !leading-[50px] md:text-[91px] sm:text-[50px] text-[40px] font-lalezar">
                        ACHIEVEMENTS
                        </span>
                    </div>

                    <p className="md:text-[16px] text-[14px] font-Poppins text-center md:w-[50%] w-[90%]">
                    Because a picture is worth a thousand words, here is a sample of our finest creations and the best of our expertise.                    </p>
                </div>
                
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.map((video, index) => (
                            <VideoLink key={index} video={video} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;