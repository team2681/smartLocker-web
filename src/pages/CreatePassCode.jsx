import { useState } from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CreatePassCode() {
  const navigate = useNavigate();
  const [passCode, setPassCode] = useState("");
  const [reEnterPassCode, setReEnterPassCode] = useState("");
  const [shake, setShake] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const handleBack = () => {
    navigate(-1); // Navigate to previous screen
  };

  const handleClose = () => {
    navigate("/"); // Optional: navigate to home or initial screen
  };

  const handleConfirm = () => {
    if (passCode.length !== 4 || reEnterPassCode.length !== 4) {
      triggerShake();
      return;
    }
    if (passCode !== reEnterPassCode) {
      triggerShake();
      return;
    }
    // Show dialog instead of alert
    setShowDialog(true);
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleDialogOk = () => {
    setShowDialog(false);
    navigate("/booking"); // Navigate to BookingDetails screen
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-[#E8ECF9] px-4 pt-10">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-sm p-6 relative">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <button onClick={handleBack} className="text-[#1D3557] text-lg">
            <FaArrowLeft />
          </button>
          <button onClick={handleClose} className="text-[#1D3557] text-lg">
            <FaTimes />
          </button>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#1D3557] mb-2">
          Create 4 digit pass code
        </h2>
        <p className="text-orange-600 mb-6 text-sm">
          Mandatory for collecting items
        </p>

        {/* Enter Pass Code */}
        <label className="block text-left text-gray-700 mb-1 font-normal">
          Enter Pass Code
        </label>
        <input
          type="password"
          maxLength={4}
          value={passCode}
          onChange={(e) => setPassCode(e.target.value)}
          className={`w-full border border-gray-300 rounded-lg p-2 mb-4 text-center text-lg focus:outline-none focus:ring-2 focus:ring-[#1D3557] ${
            shake ? "animate-shake border-red-500" : ""
          }`}
        />

        {/* Re-enter Pass Code */}
        <label className="block text-left text-gray-700 mb-1 font-normal">
          Re-enter Pass Code
        </label>
        <input
          type="password"
          maxLength={4}
          value={reEnterPassCode}
          onChange={(e) => setReEnterPassCode(e.target.value)}
          className={`w-full border border-gray-300 rounded-lg p-2 mb-6 text-center text-lg focus:outline-none focus:ring-2 focus:ring-[#1D3557] ${
            shake ? "animate-shake border-red-500" : ""
          }`}
        />

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          className="w-full py-2 rounded-lg text-white font-semibold bg-[#1D3557] hover:bg-blue-800 transition-all"
        >
          CONFIRM
        </button>
      </div>

      {/* Dialog */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
            <p className="text-gray-700 mb-6">
              Remember the passcode, don't share it with anyone!
            </p>
            <button
              onClick={handleDialogOk}
              className="px-6 py-2 rounded-md bg-[#F28C28] text-white font-semibold hover:bg-orange-600"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Tailwind Shake Animation */}
      <style>
        {`
          @keyframes shake {
            0% { transform: translateX(0); }
            20% { transform: translateX(-6px); }
            40% { transform: translateX(6px); }
            60% { transform: translateX(-6px); }
            80% { transform: translateX(6px); }
            100% { transform: translateX(0); }
          }
          .animate-shake {
            animation: shake 0.5s;
          }
        `}
      </style>
    </div>
  );
}
