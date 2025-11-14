import { HashRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Authentication from './pages/Authentication';
import LocationPrompt from "./pages/LocationPrompt";
import OneTimeRegistration from './pages/OneTimeRegistration';
import OtpVerification from './pages/OtpVerification';
import PickYourLocker from './pages/PickYourLocker';
import WelcomePage from './pages/WelcomePage';
import LockerDuration from './pages/LockerDuration';
import CreatePassCode from './pages/CreatePassCode';
import BookingDetails from './pages/BookingDetails';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LocationPrompt />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/register" element={<OneTimeRegistration />} />
        <Route path="/locker" element={<PickYourLocker />} />
        <Route path="/duration" element={<LockerDuration />} />
        <Route path="/passcode" element={<CreatePassCode />} />
        <Route path="/booking" element={<BookingDetails />} />
      </Routes>
    </Router>
  );
}
