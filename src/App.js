import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Monument from './components/Monument';
import Heritage from './components/Heritage';
import About from './components/About';
import Festivals from './components/Festivals';
import Cuisine from './components/Cuisine';
import MusicAndDance from './components/MusicAndDance';
import ArtAndCraft from './components/ArtAndCraft';
import Culture from './components/Culture';
import Freedom from './components/Freedom';
import Story from './components/Story';
import Books from './components/Books';
import Navbar from './components/Navbar';
import Home1 from './components/Home1';
import Travel from './components/Travel';
import Event from './components/Event'; // Import the Event component
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard'; 
import Quiz from './components/Quiz';
import EmailSender from './components/EmailSender';
import TripManagement from './components/TripManagement';
import Trip from './components/Trip';
import VirtualTour from './components/VirtualTour'; // Import the VirtualTour componen




import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          {/* Redirect to Home after login */}
          <Route path="/" element={isLoggedIn ? <Home /> : <Home1 />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/monument" element={<Monument />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/festival" element={<Festivals />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/music-and-dance" element={<MusicAndDance />} />
          <Route path="/art-and-craft" element={<ArtAndCraft />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/freedom" element={<Freedom />} />
          <Route path="/story/:placeId" element={<Story />} />
          <Route path="/books/:bookName" element={<Books />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/about" element={<About />} />
          <Route path="/event/:eventName" element={<Event />} /> {/* Add the Event.js Route */}
          <Route path="/quiz" element={<Quiz />} /> {/* Correctly add the Quiz route */}
          <Route path="/email-sender" element={<EmailSender />} /> {/* Add the EmailSender route */}
          <Route path="/admin/trips" element={<TripManagement/>} />
          <Route path="/trips" element={<Trip/>} />
          <Route path="/virtual-tour" element={<VirtualTour />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
