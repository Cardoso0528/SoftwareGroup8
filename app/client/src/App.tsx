import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ClientDashboard from './pages/ClientDashboard'
import AccountSetting from './pages/AccountSetting'
import Availability from './pages/Availability'
import HairstylistDashboard from './pages/HairstylistDashboard'
import EditService from './pages/EditService'
//import './App.css'
import Login from './components/Login';
import Landing from './components/Landing';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/client-dashboard" element={<ClientDashboard />}/>
        <Route path="/hairstylist-dashboard" element={<HairstylistDashboard/>}/>
        <Route path="/account-settings"element={<AccountSetting/>}/>
        <Route path="/set-availability"element={<Availability/>}/>
        <Route path="/edit-services"element={<EditService/>}/>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<div>Services Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
