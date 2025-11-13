import { useState } from "react";
import { motion } from "framer-motion";
import lockerIcon from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Authentication() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [checked, setChecked] = useState(false);

  const handleGenerateOTP = () => {
    if (!checked) {
      alert("Please accept the terms and conditions first.");
      return;
    }
    if (!mobile || mobile.length < 10) {
      alert("Please enter a valid mobile number.");
      return;
    }
     navigate("/otp");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#E8ECF9] px-4">
      {/* Card */}
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-sm p-6 text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-4"
        >
          <div className="bg-white rounded-full flex items-center justify-center p-3">
            <img src={lockerIcon} alt="Locker" className="h-14 w-14 object-contain" />
          </div>
        </motion.div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-blue-900 mb-6">Authentication</h2>

        {/* Mobile Number Input */}
        <div className="mb-4">
          <input
            type="tel"
            maxLength={10}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter your mobile number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start gap-2 text-left mb-6">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-1 accent-blue-600"
          />
          <label className="text-sm text-gray-600">
            I agree to the{" "}
            <a href="/terms" className="text-blue-600 underline">
              Terms & Conditions
            </a>
          </label>
        </div>

        {/* Generate OTP Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: checked ? 1.03 : 1 }}
          onClick={handleGenerateOTP}
          disabled={!checked}
          className={`w-full py-2 rounded-lg text-white font-semibold transition-all ${
            checked
              ? "bg-[#1D3557] hover:bg-[#16324F]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Generate OTP
        </motion.button>
      </div>
    </div>
  );
}
