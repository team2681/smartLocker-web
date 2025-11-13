import { useState } from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SelectDuration() {
  const navigate = useNavigate();
  const [duration, setDuration] = useState(1); 

  
  const predefinedOptions = [
    { hours: 1, price: 10 },
    { hours: 3, price: 20 },
    { hours: 5, price: 35 },
    { hours: 8, price: 60 },
    { hours: 12, price: 80 },
  ];

  const formatTime = (hours) => {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h} hr${h !== 1 ? "s" : ""}${m > 0 ? ` ${m} min` : ""}`;
  };

  const calculatePrice = (hours) => {
    if (hours <= 1) return 10;
    if (hours <= 3) return 20;
    if (hours <= 5) return 35;
    if (hours <= 8) return 60;
    return 80;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#E8ECF9] px-4 pt-10">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-sm p-6 relative">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <button className="text-[#1D3557] text-lg">
            <FaArrowLeft />
          </button>
          <button className="text-[#1D3557] text-lg">
            <FaTimes />
          </button>
        </div>

        {/* Selected Duration and Price */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-[#1D3557] mb-2">
            {formatTime(duration)}
          </h2>
          <p className="text-xl text-[#F28C28] font-semibold">
            ₹ {calculatePrice(duration)}
          </p>
        </div>

        {/* Slider */}
        <div className="mb-8">
          <input
            type="range"
            min="0"
            max="12"
            step="0.5"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#F28C28]"
          />
          <div className="flex justify-between text-xs mt-2 text-gray-500">
            <span>0 hr</span>
            <span>12 hr</span>
          </div>
        </div>

        {/* Predefined Duration Grid */}
        <div className="grid grid-cols-3 gap-4">
          {predefinedOptions.map((option) => (
            <button
              key={option.hours}
              onClick={() => setDuration(option.hours)}
              className={`flex flex-col items-center justify-center border rounded-lg p-4 transition-all ${
                duration === option.hours
                  ? "bg-[#F28C28] text-white border-[#F28C28]"
                  : "bg-white text-[#1D3557] border-gray-300 hover:bg-gray-100"
              }`}
            >
              <span className="font-semibold">{option.hours} hr</span>
              <span className="text-[#F28C28] font-bold">₹ {option.price}</span>
            </button>
          ))}
        </div>

        {/* Proceed Button */}
        <button
          onClick={() => navigate("/passcode")}
          className={`w-full py-2 mt-6 rounded-lg text-white font-semibold transition-all bg-[#1D3557] hover:bg-blue-800`}
        >
          PROCEED
        </button>
      </div>
    </div>
  );
}
