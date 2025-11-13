import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import lockerIcon from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function OtpVerification() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [isResendEnabled, setIsResendEnabled] = useState(false);
  const inputRefs = useRef([]);

  // Countdown Timer
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    } else {
      setIsResendEnabled(true);
    }
  }, [timer]);

  // Handle OTP input logic
  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // Only numbers
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto move to next input
    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setOtp(["", "", "", ""]);
    setTimer(60);
    setIsResendEnabled(false);
    inputRefs.current[0].focus();
    console.log("OTP resent!");
  };

  const handleConfirm = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 4) {
      alert("Please enter a valid 4-digit OTP.");
      return;
    }
    navigate("/register")
    console.log("OTP confirmed:", enteredOtp);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#E8ECF9] px-4">
      {/* Card */}
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-sm p-6 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-4"
        >
          <div className="bg-white rounded-full flex items-center justify-center p-3">
            <img src={lockerIcon} alt="Locker" className="h-14 w-14 object-contain" />
          </div>
        </motion.div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Enter your OTP</h2>

        {/* Timer */}
        <p className="text-sm text-gray-600 mb-6">
          Time remaining:{" "}
          <span className="font-semibold text-orange-600">{timer}s</span>
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="w-12 h-12 border border-gray-300 rounded-lg text-center text-xl font-semibold text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          ))}
        </div>

        {/* Resend OTP */}
        <div className="mb-6">
          {isResendEnabled && (
            <button
              onClick={handleResend}
              className="text-sm text-blue-600 font-semibold hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>

        {/* Confirm Button */}
        <motion.button
          whileTap={{ scale: 0.96 }}
          onClick={handleConfirm}
          disabled={otp.join("").length < 4}
          className={`w-full py-2 rounded-lg text-white font-semibold transition-all ${
            otp.join("").length === 4
              ? "bg-[#1D3557] hover:bg-[#16324F]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Confirm
        </motion.button>
      </div>
    </div>
  );
}
