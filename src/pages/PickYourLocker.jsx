import { useState } from "react";
import lockerLogo from "../assets/logo.png";
import lockerImage from "../assets/react.svg";
import { useNavigate } from "react-router-dom";

export default function PickYourLocker() {
  const navigate = useNavigate();
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const lockers = [
    { id: "S1", size: "S", status: "available" },
    { id: "S2", size: "S", status: "available" },
    { id: "S3", size: "S", status: "occupied" },
    { id: "M1", size: "M", status: "available" },
    { id: "M2", size: "M", status: "occupied" },
    { id: "M3", size: "M", status: "available" },
    { id: "L1", size: "L", status: "available" },
    { id: "L2", size: "L", status: "occupied" },
    { id: "L3", size: "L", status: "available" },
    { id: "S4", size: "S", status: "available" },
    { id: "S5", size: "S", status: "available" },
    { id: "S6", size: "S", status: "occupied" },
    { id: "S7", size: "S", status: "available" },
    { id: "XL1", size: "XL", status: "available" },
    { id: "XL2", size: "XL", status: "occupied" },
  ];

  const handleLockerClick = (locker) => {
    if (locker.status === "occupied") return;
    setSelectedLocker(locker);
    setShowDialog(true);
  };

  const handleDismiss = () => {
    setShowDialog(false);
  }

  const getSpanClasses = (size) => {
    switch (size) {
      case "S":
        return "col-span-1 row-span-1 w-14 h-14";
      case "M":
        return "col-span-1 row-span-2 w-14 h-28";
      case "L":
        return "col-span-2 row-span-1 w-28 h-14";
      case "XL":
        return "col-span-2 row-span-2 w-28 h-28";
      default:
        return "col-span-1 row-span-1 w-14 h-14";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#E8ECF9] px-4 pt-4 pb-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-3">
          <img src={lockerLogo} alt="Locker Logo" className="h-12 w-12" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#1D3557] mb-6">
          Pick your perfect locker
        </h2>

        {/* Legend */}
        <div className="flex justify-center gap-4 text-sm mb-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white border border-gray-400 rounded"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#1D3557] rounded"></div>
            <span>Occupied</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#F28C28] rounded"></div>
            <span>Selected</span>
          </div>
        </div>

        {/* Dynamic Locker Grid with animation */}
        <div
          className="grid gap-2 justify-items-center"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(56px, 1fr))",
          }}
        >
          {lockers.map((locker) => {
            const isSelected = selectedLocker?.id === locker.id;
            const isOccupied = locker.status === "occupied";

            const baseClass = [
              "flex items-center justify-center",
              "rounded-none",
              "text-sm font-semibold",
              "border border-gray-400",
              "transition-all duration-300 transform",
              isOccupied
                ? "bg-[#1D3557] text-white cursor-not-allowed"
                : isSelected
                ? "bg-[#F28C28] text-white scale-110 shadow-lg"
                : "bg-white hover:bg-gray-100 hover:scale-105",
              getSpanClasses(locker.size),
            ].join(" ");

            return (
              <button
                key={locker.id}
                onClick={() => handleLockerClick(locker)}
                className={baseClass}
              >
                {locker.id}
              </button>
            );
          })}
        </div>

        {/* Proceed Button */}
        <button
          onClick={() => {
            if (!selectedLocker) {
              alert("Please select a locker first!");
              return;
            }
            navigate("/duration");
          }}
          className={`w-full py-2 mt-6 rounded-lg text-white font-semibold transition-all ${
            selectedLocker
              ? "bg-[#1D3557] hover:bg-blue-800"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!selectedLocker}
        >
          PROCEED
        </button>
      </div>

      {/* Dialog with only OK button */}
      {showDialog && selectedLocker && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
            <h3 className="text-xl font-bold text-[#1D3557] mb-2">
              Locker Selected
            </h3>
            <p className="text-gray-600 mb-4">
              You selected{" "}
              <span className="font-semibold">{selectedLocker.id}</span>
            </p>
            <img
              src={lockerImage}
              alt="Locker Preview"
              className="w-40 h-32 object-contain mx-auto mb-4"
            />
            <button
              onClick={handleDismiss}
              className="px-6 py-2 rounded-md bg-[#F28C28] text-white font-semibold hover:bg-orange-600"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
