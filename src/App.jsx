import React from "react";
import Home from "./pages/home";
import Event from "./pages/automotive"
import Print from "./pages/print";
import Detail from "./componets/printdetail";
import About from "./pages/about";
import Live from "./pages/live";
import Architecture from "./pages/architectural";
import Food from "./pages/food";
import Portraits from "./pages/portraits";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTE_CONSTANTS } from "./constants/route.constants";
const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path={ROUTE_CONSTANTS.HOME} element={<Home />} />
        <Route path={ROUTE_CONSTANTS.EVENT} element={<Event />} />
        <Route path="/Print" element={<Print />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/About" element={<About />} />
        <Route path="/Live" element={<Live />} />
        <Route path="/architectural" element={<Architecture />} />
        <Route path="/food" element={<Food />} />
        <Route path="/portraits" element={<Portraits/>} />
      </Routes>
    </Router>
  );
  
}
export default App