import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";

interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  value: number;
  defaultValue: number;
  setValue: (n: number) => void;
  onChange?: (value: number) => void;
  className?: string;
}

const DurationDisplay = ({ value }: { value: number }) => {
  return (
    <div className="absolute top-[-60px] left-1/2 translate-x-[-30%] w-48 h-48 flex items-center justify-center">
      <AnimatePresence mode="wait">
        <div
          key={value}
          className="absolute flex items-center justify-center gap-[20px]"
        >
          {/* <motion.img
            src="/clock.png"
            alt="Clock"
            className="w-12 h-12 mb-2"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              },
            }}
          /> */}
          {/* <motion.img
            src="/time.png"
            alt="Time"
            className="w-10 h-10 absolute top-[-20px] right-[-20px]"
            animate={{
              y: [0, -8, 0],
              x: [0, 8, 0],
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              },
              x: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              },
            }}
          /> */}
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:text-[80px] text-[60px] font-lalezar text-[#F10E4A]"
            >
              {value}
            </motion.span>
            <motion.span
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:text-[60px] text-[40px] font-lalezar text-[#F10E4A]"
            >
              SEC
            </motion.span>
        </div>
      </AnimatePresence>
    </div>
  );
};

const RangeSlider = ({
  min = 0,
  max = 120,
  step = 30,
  value,
  setValue,
  onChange,
  defaultValue = 60,
  className = "",
}: RangeSliderProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const timeMarkers = [30, 60, 90, 120];

  const percentage = ((value - min) / (max - min)) * 100;

  const thumbAnimation = useSpring({
    left: `calc(${percentage}% + 12px - ${(percentage / 100) * 24}px)`,
    scale: showTooltip ? 1.2 : 1,
    config: {
      tension: 400,
      friction: 28,
    },
  });

  const progressAnimation = useSpring({
    width: `${percentage}%`,
    config: {
      tension: 300,
      friction: 24,
    },
  });

  const handleMarkerClick = (markerValue: number) => {
    setValue(markerValue);
    onChange?.(markerValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.round(parseInt(e.target.value, 10) / 30) * 30;
    if (newValue >= 30 && timeMarkers.includes(newValue)) {
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <section className="w-full h-full relative pt-32">
      <DurationDisplay value={value} />

      <div className={`relative w-full min-w-[200px] h-12 ${className}`}>
        <div className="absolute top-1/2 left-3 right-3 h-4 -translate-y-1/2 bg-[#FFE4E4] rounded-full">
          <animated.div
            style={progressAnimation}
            className="absolute h-full icon-gradient !p-0 rounded-full"
          />
        </div>

        <div className="absolute -top-[7px] left-3 right-3 h-4 -translate-y-1/2">
          {timeMarkers.map((markerValue) => {
            const markerPosition = ((markerValue - min) / (max - min)) * 100;
            return (
              <button
                key={markerValue}
                onClick={() => handleMarkerClick(markerValue)}
                className={`absolute md:top-[40px] top-[39px] text-white font-lalezar md:text-[20px] text-[14px] flex items-center justify-center -translate-y-1/2 
                  ${
                    value >= markerValue
                      ? "md:w-4 w-2 md:h-4 h-2"
                      : "md:w-12 w-8 md:h-8 h-6 border-[2px] border-white shadow-md"
                  } bg-[#F10E4A] outline md:outline-[10px] outline-[5px] outline-slate-100 rounded-[10px] 
                  cursor-pointer hover:scale-125 transition-transform`}
                style={{ left: `${markerPosition}%` }}
              >
                {value >= markerValue ? "" : markerValue}
              </button>
            );
          })}
        </div>

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="absolute left-[12px] w-full h-full opacity-0 cursor-pointer"
        />

        <animated.div
          style={thumbAnimation}
          className={`absolute md:top-[28px] flex items-center justify-center font-lalezar md:text-[20px] text-[14px] 
            text-white top-[30px] md:w-10 w-8 md:h-10 h-8 -translate-x-1/2 -mt-5 bg-[#F10E4A] cursor-pointer 
            ${
              timeMarkers.includes(value)
                ? "rounded-[10px] md:!w-12 !w-8 md:!h-8 !h-6"
                : "rounded-full"
            } 
            rounded-full shadow-md border-[2px] border-slate-100 pointer-events-none`}
        >
          {timeMarkers.includes(value) && value}
        </animated.div>
      </div>
    </section>
  );
};

export default RangeSlider;
