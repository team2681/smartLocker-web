import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LocationPrompt() {
  const navigate = useNavigate();
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = () => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const loc = {
          lat: pos.coords.latitude.toFixed(5),
          lon: pos.coords.longitude.toFixed(5),
        };
        setLocation(loc);
        setLoading(false);

        // Navigate to Welcome screen after getting location
        navigate("/welcome");
      },
      () => {
        setError("Please allow location access in your browser settings.");
        setLoading(false);
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E8ECF9]">
      <div className="bg-white w-[320px] rounded-xl shadow-md p-5 text-center">
        <h2 className="text-lg font-semibold text-[#1D3557] mb-3">
          Allow location access
        </h2>

        {!location && (
          <>
            <p className="text-sm text-[#F28C28] mb-1">
              Go to settings ⇒ site Setting ⇒ location
            </p>
            <p className="text-sm text-[#F28C28] mb-5">
              Allow location access and try again to continue
            </p>
          </>
        )}

        {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

        <button
          onClick={getLocation}
          className={`w-full py-2 rounded-md font-semibold text-white ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-[#1D3557] hover:bg-[#16324F]"
          }`}
          disabled={loading}
        >
          {loading ? "Getting Location..." : "GET LOCATION"}
        </button>
      </div>
    </div>
  );
}
