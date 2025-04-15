import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ClientDashboard from './pages/ClientDashboard'
import AccountSetting from './pages/AccountSetting'
import Availability from './pages/Availability'
import HairstylistDashboard from './pages/HairstylistDashboard'
import EditService from './pages/EditService'
//import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<p>temp home</p>}/>
        <Route path="client-dashboard" element={<ClientDashboard />}/>
        <Route path="hairstylist-dashboard" element={<HairstylistDashboard/>}/>
        <Route path="account-settings"element={<AccountSetting/>}/>
        <Route path="set-availability"element={<Availability/>}/>
        <Route path="edit-services"element={<EditService/>}/>
      </Routes>
    </Router>
  )
}

export default App
