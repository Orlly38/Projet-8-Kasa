import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Logement from "./Pages/Logement";
import About from "./Pages/About";

function Router() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Accueil" element={<Home/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Error" element={<Error/>} />
            <Route path="/src/data/:id" element={<Logement/>} />
            <Route path="/About" element={<About/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;
