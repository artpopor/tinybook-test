

import React, { useState ,useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import './App.css';
import Registerpage from './RegisterPage';
import AlbumPage from './AlbumPage';
import List from './List';
import All from './All';
import Profile from './Profile';







function App() {
  const liff = window.liff;
  console.log("liff,", liff)
  const [isLiffReady, setIsLiffReady] = useState(false);
  const [inputValues, setInputValues] = useState({
    Service: '',
    Name: '',
    Nickname: '',
    Tel: ''
  });
  useEffect(() => {
    const initializeLiff = async () => {
      try {
        if (!window.liff) throw new Error('LIFF SDK is not loaded');
        await window.liff.init({ liffId: '2005869975-nMZOOGBm' });
        if (window.liff.isLoggedIn()) {
          const profile = await window.liff.getProfile();
          console.log('profile', profile);
        } else {
          window.liff.login();
        }
        setIsLiffReady(true);

      } catch (err) {
        console.error('Error initializing LIFF:', err);
      }
    };
  
    initializeLiff();
  }, []);
  if (!isLiffReady) {
    return <div>Loading...</div>;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/page1" />} />
        <Route path="/page1" element={<Page1 inputValues={inputValues} setInputValues={setInputValues} />} />
        <Route path="/page2" element={<Page2 inputValues={inputValues} setInputValues={setInputValues} />} />
        <Route path="/Register" element={<Registerpage />} />
        <Route path="/Album" element={<AlbumPage />} />
        <Route path="/All" element={<All />} />
        <Route path="/List" element={<List />} />
        <Route path="/Profile" element={<Profile />} />


      </Routes>
    </Router>
  );
}

export default App;
