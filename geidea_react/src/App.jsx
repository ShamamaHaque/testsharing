import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import LeaderList from "./pages/LeaderList";
import  AddLea  from "./pages/AddTeamLeader";
import AddTech from "./pages/AddTechnician";
import TechList from "./pages/TechniciansList";
import Location from "./pages/Location";
import Sales from "./pages/Sales";
import { Contact } from "./components/contact";
import Sample from "./pages/LandingPage";
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { Routes,Router } from 'react-router-dom';
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    
<Router>
      <Fragment>
    
    <Routes>
      <Route exact path="/" element={<Sample/> } />
      <Route exact path="/leaderlist" element={<LeaderList/> } />
      <Route exact path="/addteamleader" element={<AddLea/> } />
      <Route exact path="/addtech" element={<AddTech/> } />
      <Route exact path="/techlist" element={<TechList/> } />
      <Route exact path="/location" element={<Location/> } />
      <Route exact path="/sales" element={<Sales/> } />


      
      {/* <Route exact path="/ab" element={<Ab/> } /> */}
    </Routes>
    </Fragment>
</Router>


  );
};

export default App;
