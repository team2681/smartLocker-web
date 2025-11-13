import React, { useState } from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";

export default function BookingDetails() {
  const [showDialog, setShowDialog] = useState(false);

  // Sample booking data
  const booking = {
    terminalId: "T12345",
    userName: "Anil Kumar",
    mobileNumber: "9876543210",
    locker: "S2",
    totalTime: "3 hr",
    amount: 20,
  };

  const gst = +(booking.amount * 0.18).toFixed(2);
  const totalAmount = booking.amount + gst;

  const handlePaymentClick = () => {
    setShowDialog(true);
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

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#1D3557] mb-6 text-center">
          Booking Summary
        </h2>

        {/* Booking Details */}
        <div className="space-y-3 text-gray-700 text-sm">
          <div className="flex justify-between">
            <span>Terminal ID</span>
            <span className="font-semibold">{booking.terminalId}</span>
          </div>
          <div className="flex justify-between">
            <span>User Name</span>
            <span className="font-semibold">{booking.userName}</span>
          </div>
          <div className="flex justify-between">
            <span>Mobile Number</span>
            <span className="font-semibold">{booking.mobileNumber}</span>
          </div>
          <div className="flex justify-between">
            <span>Selected Locker</span>
            <span className="font-semibold">{booking.locker}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Time</span>
            <span className="font-semibold">{booking.totalTime}</span>
          </div>
          <div className="flex justify-between">
            <span>Amount</span>
            <span className="font-semibold">₹ {booking.amount}</span>
          </div>
          <div className="flex justify-between">
            <span>GST (18%)</span>
            <span className="font-semibold">₹ {gst}</span>
          </div>
          <div className="flex justify-between border-t border-gray-300 pt-3 text-[#1D3557] font-bold text-lg">
            <span>Total Amount</span>
            <span className="text-xl animate-pulse">₹ {totalAmount}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handlePaymentClick}
            className="w-1/2 py-2 rounded-lg text-white font-semibold bg-[#1D3557] hover:bg-blue-800 transition-all transform hover:scale-105 animate-bounce"
          >
            Pay Now
          </button>
          <button
            onClick={handlePaymentClick}
            className="w-1/2 py-2 rounded-lg text-white font-semibold bg-[#F28C28] hover:bg-orange-600 transition-all"
          >
            Pay Later
          </button>
        </div>
      </div>

      {/* Payment Dialog */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
            <h3 className="text-xl font-bold text-[#1D3557] mb-2">
              Proceed To Payment
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              After successful payment, keep the app open until the locker door
              opens. If it does not, call <span className="font-semibold">7666190990</span>.
            </p>
            <button
              onClick={() => setShowDialog(false)}
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
