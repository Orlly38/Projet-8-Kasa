import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Logement from "./Pages/Logement";
//import A_propos from ".Pages/A-propos";
//import Error from ".Pages/Error";
//import Logement from ".Pages/Logement";

function Router() {
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path="/Home" element={<Home/>} />
            <Route exact path="/Error" element={<Error/>} />
            <Route exact path="/Logement" element={<Logement/>} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default Router;
