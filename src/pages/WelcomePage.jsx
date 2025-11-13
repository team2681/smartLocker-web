import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#E8ECF9] px-4">
      
      {/* Language selector */}
      <div className="flex flex-col items-center mb-2">
        <p className="text-gray-700 text-sm mb-1 font-medium">
          Choose your preferred language
        </p>
        <select className="bg-[#C76B23] text-white font-semibold px-4 py-1 rounded-md shadow focus:outline-none">
          <option>English</option>
          <option>हिंदी</option>
        </select>
      </div>

      {/* Card / Modal */}
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-sm text-center overflow-hidden">
        
        {/* Logo section - edge-to-edge */}
        <div className="bg-[#1D3557] flex justify-center items-center h-14">
          <h1 className="text-white text-xl font-bold tracking-wide">Smart Locker</h1>
        </div>

        {/* Inner content with padding */}
        <div className="p-6">
          {/* Welcome message */}
          <div className="mb-4">
            <p className="text-[#F28C28] font-semibold text-lg">
              Hello, <span className="text-[#1D3557] font-normal">welcome to</span>
            </p>
            <p className="text-[#1D3557] font-bold text-lg">Smart Locker</p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col items-center mb-6">
            <p className="text-[#F28C28] font-semibold mb-2">Keep (Store)</p>
            <div className="bg-white border-2 border-[#1D3557] rounded-full p-2 mb-3 shadow-sm"
            onClick={() => navigate("/auth")}
            >
              <IoIosArrowUp className="text-[#1D3557] text-2xl" />
            </div>

            <hr className="w-1/2 border border-gray-300 mb-3" />

            <div className="bg-white border-2 border-[#1D3557] rounded-full p-2 mb-2 shadow-sm">
              <IoIosArrowDown className="text-[#1D3557] text-2xl" />
            </div>
            <p className="text-[#F28C28] font-semibold">Pickup (Take)</p>
          </div>

          {/* Social media icons */}
          <div className="border-t pt-3">
            <p className="text-gray-600 text-sm mb-2">Follow us on</p>
            <div className="flex justify-center gap-4 text-2xl">
              <FaInstagram className="text-[#E1306C]" />
              <FaFacebook className="text-[#1877F2]" />
              <FaLinkedin className="text-[#0A66C2]" />
              <FaYoutube className="text-[#FF0000]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
