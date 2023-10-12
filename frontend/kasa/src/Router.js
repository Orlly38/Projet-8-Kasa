import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Logement from "./Pages/Logement";
import About from "./Pages/About";
//import Error from ".Pages/Error";
//import Logement from ".Pages/Logement";

function Router() {
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Accueil" element={<Home/>} />
            <Route exact path="/Home" element={<Home/>} />
            <Route exact path="/Error" element={<Error/>} />
            <Route exact path="/Logement" element={<Logement/>} />
            <Route exact path="/About" element={<About/>} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;
