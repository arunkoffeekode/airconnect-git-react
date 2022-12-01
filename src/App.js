import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Character from "./pages/Character";
import Joyrides from "./pages/Joyrides";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import SignUp from "./pages/SignUp";
import SignUp1 from "./pages/SignUp1";
import SignUp2 from "./pages/SignUp2";
import Verification from "./pages/Verification";
import Overview from "./pages/Overview";
import NewPassword from "./pages/NewPassword";
import Scheduler from "./pages/Scheduler";
import SchedulCalender from "./pages/SchedulCalender";
import FlightStatus from "./pages/FlightStatus";
import FlightSchedule from "./pages/FlightSchedule";
import Account from "./pages/Account";
import CharacterDetails from "./pages/CharacterDetails";
import Booking from "./pages/Booking";
import FlightBooking from "./pages/FlightBooking";
import FlightBooking1 from "./pages/FlightBooking1";
import ManageBooking from "./pages/ManageBooking";
import CreateNewPassword from "./pages/CreateNewPassword";
import CreateNewPasswordOne from "./pages/CreateNewPasswordOne";
import Wallet from "./pages/Wallet";
import WebCheckIn from "./pages/WebCheckIn";
import ChangeSeat from "./pages/ChangeSeat";
import BoardingPass from "./pages/BoardingPass";
import ExtraBaggage from "./pages/ExtraBaggage";
import GstDetails from "./pages/GstDetails";
import Rebooking from "./pages/Rebooking";
import ExtraBaggageSecond from "./pages/ExtraBaggageSecond";
import FlightPriceDetails from "./pages/FlightPriceDetails";
import CancelBooking from "./pages/CancelBooking";
import PaxChangeRequest from "./pages/PaxChangeRequest";
import MyBooking from "./pages/MyBooking";
import BookingNew from "./pages/BookingNew";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup1" element={<SignUp1 />} />
          <Route path="/signup2" element={<SignUp2 />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/newpassword" element={<NewPassword/>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/character" element={<Character />} />
          <Route path="/joyrides" element={<Joyrides />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/schedulalender" element={<SchedulCalender />} />
          <Route path="/flightstatus" element={<FlightStatus />} />
          <Route path="/flightschedule" element={<FlightSchedule />} />
          <Route path="/account" element={<Account />} />
          <Route path="/characterdetails" element={<CharacterDetails />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/flightbooking" element={<FlightBooking />} />
          <Route path="/flightbooking1" element={<FlightBooking1 />} />
          <Route path="/manageBooking" element={<ManageBooking />} />
          <Route path="/createNewPassword" element={<CreateNewPassword />} />
          <Route path="/createNewPasswordOne" element={<CreateNewPasswordOne />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/webCheckIn" element={<WebCheckIn />} />
          <Route path="/changeSeat" element={<ChangeSeat />} />
          <Route path="/boardingPass" element={<BoardingPass />} />
          <Route path="/extraBaggage" element={<ExtraBaggage />} />
          <Route path="/gstDetails" element={<GstDetails />} />
          <Route path="/rebooking" element={<Rebooking />} />
          <Route path="/extraBaggageSecond" element={<ExtraBaggageSecond />} />
          <Route path="/flightPriceDetails" element={<FlightPriceDetails />} />
          <Route path="/cancelBooking" element={<CancelBooking />} />
          <Route path="/paxChangeRequest" element={<PaxChangeRequest />} />
          <Route path="/myBooking" element={<MyBooking />} />
          <Route path="/bookingNew" element={<BookingNew/>} />



          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
