import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/MyNav';
import Welcome from './components/Welcome';
import MyFooter from './components/MyFooter';
import ImageGallery from './components/ImageGallery';
import ImageDetail from './components/ImageDetail';


function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element = {<Welcome /> } />
        <Route path="/image-gallery" element = {<ImageGallery />} />
        <Route path="/image1" element = {<ImageDetail />} />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;
