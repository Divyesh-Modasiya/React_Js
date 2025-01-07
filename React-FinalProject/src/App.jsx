import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MovieList from './MovieList';
import Watchlist from './Watchlist';
import NavBar from './Redux/NavBar';
import Admin from './Admin';
import './index.css'; // or './App.css' if that's where you have your styles
import Login from './Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import Footer from './Footer';
import Aos from 'aos';


function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    Aos.init({
      duration: 1000, 
      once: true, 
    });
  }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={user ? <MovieList /> : <Navigate to="/login" />} />
        <Route path="/watchlist" element={<Watchlist/>} />
        <Route path='/admin' element={<Admin/>}></Route>
      </Routes>
      <Footer/>

    </Router>
  );
}

export default App;
