import { useState } from "react";
import TimeSlider from "./PriceSlider";
import { motion } from "framer-motion";
import SimpleTimeSlider from "./SimpleTimeSlider";
import RangeSlider from "./SimpleTimeSlider";


//30 = 7000 AED
//60 = 12000 AED
//90 = 18000 AED
//120 = 23000 AED

const PriceTimeline = () => {
  const [duration, setDuration] = useState(60);
 
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return minutes > 0 
      ? `${minutes} min ${remainingSeconds} sec`
      : `${remainingSeconds} sec`;
  };
 
  const calculatePrice = (seconds: number) => {
    return seconds === 30 ? "7000" : seconds === 60 ? "12000" : seconds === 90 ? "18000" : seconds === 120 ? "23000" : "--"
  };
 
  return (
    <div className="bg-slate-100 text-black flex flex-col justify-center py-[60px] h-screen">
      <div className="max-w-[1240px] mx-auto w-[90%] py-[30px] flex flex-col items-center gap-[10%]">
        <div className="relative h-full flex flex-col w-full items-center pb-[10px]">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl font-bold font-lalezar mb-6">
              Base Rate
            </h1>
            <p className="text-[16px] md:w-[60%] w-full text-center font-Poppins">
              The base rate corresponds to a range that does not take into
              account your specific situation or budget constraints. The easiest
              way is always to share your project with us so that we can adjust
              the quote accordingly.
            </p>
          </div>
        </div>
 
        <div className="w-full max-w-3xl mx-auto h-[200px] bg-whdite text-black flex items-end">
          <div className="w-full max-w-3xl mx-auto !pr-[30px] !py-[10px] bg-seckondary rounded-full translate-x-[-20px]">
             <RangeSlider
              min={0}
              max={120}
              step={1}
              defaultValue={60}
              value={duration}
              setValue={setDuration}
              onChange={(duration) => console.log(duration)}
            />
          </div>
        </div>
        
        <motion.div 
          className="w-full flex flex-col items-center justify-center"
          key={duration}
        >
          <span 
            className="md:text-[30px] font-lealezar text-secondary font-[800]"
          >
            Starting from {calculatePrice(duration).toLocaleString()} AED
          </span>
          {/* <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04 }}
            className="text-[20px] font-[300] font-Poppins"
          >
            for {formatDuration(duration)}
          </motion.span> */}
        </motion.div>
      </div>
    </div>
  );
 };

export default PriceTimeline;
