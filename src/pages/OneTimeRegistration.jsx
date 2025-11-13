import { useState } from "react";
import lockerIcon from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function OneTimeRegistration() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [item, setItem] = useState("");

  const handleProceed = () => {
    if (!mobile || mobile.length < 10) {
      alert("Please enter a valid mobile number.");
      return;
    }
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!dob) {
      alert("Please select your date of birth.");
      return;
    }
    if (!item) {
      alert("Please select an item to store.");
      return;
    }
    navigate("/locker")
    console.log("Registration Details:", { mobile, name, dob, item });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#E8ECF9] px-4">
      {/* Card */}
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-sm p-6 text-center relative">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img src={lockerIcon} alt="Locker" className="h-12 w-12" />
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-blue-900 mb-6">
          One Time User Registration
        </h2>

        {/* Mobile Number Input */}
        <div className="mb-4 text-left">
        <label htmlFor="mobile" className="block text-blue-900 font-normal mb-0 px-1">
        Mobile Number
        </label>
          <input
            type="tel"
            maxLength={10}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* Name Input */}
        <div className="mb-4 text-left">
            <label htmlFor="name" className="block text-blue-900 font-normal mb-0 px-1">
                User Name
            </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="User name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* DOB Input */}
        <div className="mb-4 text-left">
            <label htmlFor="dob" className="block text-blue-900 font-normal mb-0 px-1">
                Date of birth
            </label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-green-500 outline-none"
          />
        </div>

        {/* Dropdown - Item to Store */}
        <div className="mb-6 text-left">
            <label htmlFor="item" className="block text-blue-900 font-normal mb-0 px-1">
                Item to store
            </label>
          <select
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 bg-white focus:ring-2 focus:ring-green-500 outline-none"
          >
            <option value="">Select item to store</option>
            <option value="Documents">Documents</option>
            <option value="Jewellery">Jewellery</option>
            <option value="Halmet">Helmet</option>
            <option value="Cash">Cash</option>
            <option value="Electronics">Electronics</option>
          </select>
        </div>

        {/* Proceed Button */}
        <button
          onClick={handleProceed}
          className="w-full py-2 rounded-lg bg-[#1D3557] hover:bg-[#16324F] text-white font-semibold transition-all"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
