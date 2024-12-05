import { useEffect, useRef, useState } from 'react';
interface Logo {
  id: number;
  src: string;
  alt: string;
}
const logos: Logo[] = [
  {
    id: 1,
    src: "https://cdn.prod.website-files.com/6445c9ad47bf1a75b78ce67c/65c0c68689675439818542f4_bank-al-maghrib-seeklogo.svg",
    alt: "Bank Al-Maghrib"
  },
  {
    id: 2,
    src: "https://cdn.prod.website-files.com/6445c9ad47bf1a75b78ce67c/65c0c5a633154010f4f98b1f_Logo_BCP.svg",
    alt: "Renault"
  },
  // {
  //   id: 3,
  //   src: "https://cdn.prod.website-files.com/6445c9ad47bf1a75b78ce67c/65c0c85497fe3af9e8943ada_Logo_AWB.svg",
  //   alt: "Peugeot"
  // },
  {
    id: 4,
    src: "https://cdn.prod.website-files.com/6445c9ad47bf1a75b78ce67c/65c0cc4e97fe3af9e8977067_akhdar%20bank.svg",
    alt: "Paradise Place"
  },
  {
    id: 5,
    src: "https://cdn.prod.website-files.com/6445c9ad47bf1a75b78ce67c/65c0c62b6929d5c06dc92b0e_avon-seeklogo.svg",
    alt: "UNIDO"
  },
  {
    id: 6,
    src: "https://cdn.prod.website-files.com/6445c9ad47bf1a75b78ce67c/65c0cc4ddda4ee880f27f4c0_renault.svg",
    alt: "GIZ"
  },
  {
    id: 7,
    src: "https://cdn.prod.website-files.com/6445c9ad47bf1a75b78ce67c/65c0c854d339b7de3044a6a6_TGR.svg",
    alt: "GIZ"
  },
  {
    id: 8,
    src: "https://cdn.prod.website-files.com/6445c9ad47bf1a75b78ce67c/65c0cc4ddde1753ebe3dd7a8_Peugeot.svg",
    alt: "GIZ"
  },
  {
    id: 9,
    src: "https://cdn.prod.website-files.com/6445c9ad47bf1a75b78ce67c/65c0cc4ee78d09f9ec0044ee_paradis%20plage.svg",
    alt: "GIZ"
  },
  // {
  //   id: 10,
  //   src: "https://cdn.prod.website-files.com/6445c9ad47bf1a75b78ce67c/65c0c84e3d7be62423a15cbd_AXA_Logo.svg",
  //   alt: "GIZ"
  // },
  {
    id: 11,
    src: "https://cdn.prod.website-files.com/6445c9ad47bf1a75b78ce67c/65c0cc9a40da098b1e41009a_UNIDO_Logo.svg",
    alt: "GIZ"
  },
  {
    id: 12,
    src: "https://cdn.prod.website-files.com/6445c9ad47bf1a75b78ce67c/65c0cfb47537e362731cd956_GIZ.svg",
    alt: "GIZ"
  },
  {
    id: 13,
    src: "https://cdn.prod.website-files.com/6445c9ad47bf1a75b78ce67c/65c0cfb6753b5a72625a801c_Logo_Vinci.svg",
    alt: "GIZ"
  }
];

function LogoSlider(): JSX.Element {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const positionRef = useRef<number>(0);

  const getLogosToShow = (): number => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 5;
      if (window.innerWidth >= 768) return 3;
      if (window.innerWidth >= 480) return 2;
    }
    return 1;
  };

  const [logosToShow, setLogosToShow] = useState<number>(getLogosToShow());

  useEffect(() => {
    const handleResize = (): void => {
      setLogosToShow(getLogosToShow());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrameId: number;

    const animate = (): void => {
      if (!isPaused && container) {
        // Slower speed (0.1 instead of 0.5)
        positionRef.current -= 0.04;
        
        // Reset position when all logos have scrolled
        if (positionRef.current <= -100) {
          positionRef.current = 0;
        }
        
        container.style.transform = `translateX(${positionRef.current}%)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  // Double the logos for seamless loop
  const duplicatedLogos: Logo[] = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden mt-[50px]">
      <div className="max-w-[1240px] mx-auto w-[90%] flex flex-col gap-y-[20px]">
        <h2 className="text-[#4089FF] text-center text-[16px] mb-1">
          Trusted by over 100 clients:
        </h2>
        
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          <div 
            ref={containerRef}
            className="flex transition-transform duration-300 ease-linear"
            style={{
              width: `${(duplicatedLogos.length / logosToShow) * 100}%`,
              transform: `translateX(${positionRef.current}%)`
            }}
          >
            {duplicatedLogos.map((logo: Logo, index: number) => (
              <div 
                key={`${logo.id}-${index}`}
                className="flex-shrink-0"
                style={{ width: `${100 / duplicatedLogos.length}%` }}
              >
                <div className="flex items-center justify-center h-[80px] px-[60px]">
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="h-12 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="relative w-full h-screen min-h-[780px] overflow-hidden">
      {/* Fallback image while video loads */}
      {!isVideoLoaded && (
        <img
          src="https://cdn.prod.website-files.com/6445c9ad47bf1a75b78ce67c/65c11941df84865a88104cab_showreel siteweb-poster-00001.jpg"
          alt="Hero background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
      >
        <source src="https://cdn.prod.website-files.com/6445c9ad47bf1a75b78ce67c/65c11941df84865a88104cab_showreel siteweb-transcode.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/100 via-black/70 to-black/60" />

      {/* Content container */}
      <div className="relative h-full flex flex-col items-center justify-center text-white">

        <span className="md:leading-[75px] leading-[30px] text-[40px] md:text-[100px] font-lalezar">LEADER IN</span>
        <span className="md:leading-[94px] leading-[30px] text-[40px] md:text-[120px] font-lalezar cf-gradient-span">MOTION DESIGN</span>
        <span className="md:leading-[75px] leading-[30px] text-[40px] md:text-[100px] font-lalezar">IN MENA.</span>

        <p className="md:text-[16px] text-[14px] font-Poppins text-center lg:w-[50%] w-[90%] mt-[40px] md:mt-0">
        Creative experts, we transform your ideas into captivating motion for a unique visual experience. Explore graphic innovation, discover the world of motion design, and take your project to new heights.        </p>
        <LogoSlider/>
      </div>
      
    </div>
  );
};

export default Hero;