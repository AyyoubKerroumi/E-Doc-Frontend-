import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/SecretaryZone/Login';
import LoginP from './components/PatientZone/LoginP';
import Dashbord from './components/SecretaryZone/dashbord';
import ListPatient from './components/SecretaryZone/ListPatient';
import Register from './components/PatientZone/Register'
import Welcome from './components/Welcome'
import Appointment from './components/SecretaryZone/Appointement';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/Welcome' element={<Welcome />} />
          <Route path='/' element={<Welcome />} />
          <Route path='/secretaryZone/login' element={<Login />} />
          <Route path='/PatientZone/login' element={<LoginP />} />
          <Route path='/PatientZone/register' element={<Register />} />
          <Route path='/secretaryZone/secretaryDashbord' element={<Dashbord />} />
          <Route path='/secretaryZone/listePatients' element={<ListPatient />} />
          <Route path='/secretaryZone/calendar' element={<Appointment />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
