import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Index from "./Components/pages/Index";
import Aboutus from "./Components/pages/About";
import Navbar from "./Components/pages/Navbar";
import Services from "./Components/pages/Services";
import Contactus from "./Components/pages/Contactus";
import Footer from "./Components/pages/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/Aboutus" element={<Aboutus />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/Contactus" element={<Contactus />} />
          <Route exact path="/Footer" element={<Footer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
