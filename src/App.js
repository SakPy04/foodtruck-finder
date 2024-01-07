import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/navbar';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientID = process.env.GOOGLE_KEY;
  return (
    
    <Router>
      <GoogleOAuthProvider clientId={clientID}>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </GoogleOAuthProvider>
    </Router>
  );
}

export default App;
 