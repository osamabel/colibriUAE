import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimeSliderProps {
  duration: number;
  setDuration: (n: number) => void;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

const TimeValue = ({
  value,
  targetDuration,
  height,
}: {
  value: number;
  targetDuration: number;
  height: number;
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (targetDuration >= value && !hasAnimated) {
      setHasAnimated(true);
    } else if (targetDuration < value) {
      setHasAnimated(false);
    }
  }, [targetDuration, value]);

  return (
    <motion.div
      className={`flex flex-col items-center ${
        value == 30 ? "md:min-w-[150px] min-w-[70px]" : "md:min-w-[120px] min-w-[75px]"
      }`}
    >
      <AnimatePresence>
        {targetDuration >= value && (
          <motion.p
            className={`${
              value == 60
                ? "leading-[63px]"
                : value == 30
                ? "leading-[50px]"
                : value == 90
                ? "leading-[83px]"
                : "leading-[98px]"
            } `}
            initial={{ y: 50, opacity: 0, scale: 0.5 }}
            animate={{
              fontSize:window.innerWidth > 768 ? `${height}px` : `${height * 0.6}px`,
              y: 0,
              opacity: 1,
              scale: [0.5, 1.2, 1],
              rotate: [0, -10, 10, 0],
            }}
            exit={{ y: -50, opacity: 0, scale: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              mass: 1,
            }}
          >
            {value}
          </motion.p>
        )}
      </AnimatePresence>
      <motion.img
      className="md:w-[25px] w-[10px]"
        src="/line.png"
        alt=""
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: targetDuration >= value ? 1 : 0,
          rotate: targetDuration >= value ? [0, -5, 5, 0] : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
    </motion.div>
  );
};

const TimeSlider: React.FC<TimeSliderProps> = ({
  duration,
  setDuration,
  min = 0,
  max = 120,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (newValue >= 30) {
      setDuration(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <section className="w-full h-full relative">
      <div className="absolute top-0 w-full translate-y-[-10px]">
        <div className="mx-auto md:w-[500px] w-[300px] h-[200px] relative">
          <div className="absolute top-[-100%] w-full h-full">
            <div className="relative w-full h-full flex justify-around items-end font-Jaro text-[#F10E4A]">
              <motion.img
                className="absolute ridght-[-50%] bottom-[-130%]"
                src="/clock1.png"
                alt=""
                animate={{
                  scale: duration / 190, // Grows based on duration ratio
                  y: [0, -10, 0], // Floating animation
                }}
                transition={{
                  scale: { duration: 0.3, ease: "easeOut" },
                  y: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2,
                    ease: "easeInOut",
                  },
                }}
              />
              <TimeValue value={30} targetDuration={duration} height={40} />
              <TimeValue value={60} targetDuration={duration} height={60} />
              <TimeValue value={90} targetDuration={duration} height={80} />
              <TimeValue value={120} targetDuration={duration} height={100} />
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your slider code */}
      <div className="w-full h-full text-center">
        <div className="cube">
          <div
            className="a"
            style={{ width: `${((duration - min) / (max - min)) * 100}%` }}
          />
          <div
            className="b"
            style={{ width: `${((duration - min) / (max - min)) * 100}%` }}
          />
          <div
            className="c"
            style={{ width: `${((duration - min) / (max - min)) * 100}%` }}
          />
          <div
            className="d"
            style={{ width: `${((duration - min) / (max - min)) * 100}%` }}
          />

          <div
            id="slider-range-min"
            className="relative w-[94%] left-[3%] top-[27px] z-[999]"
          >
            <div className="ui-slider">
              <input
                type="range"
                min={min}
                max={max}
                value={duration}
                step={1}
                onChange={handleChange}
                className="pricing absolute w-full h-5 z-[400] cursor-pointer"
              />
            </div>
            <div
              className="ui-slider-handle"
              style={{ left: `${((duration - min) / (max - min)) * 100}%` }}
            >
              {"<>"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeSlider;
