import React from "react";
import Menupage from "./components/menupage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Locations from "./components/Locations";

function App() {
  
    return (
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigation />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menupage/>}/>
          <Route path="/locations" element={<Locations/>}/>
          </Route>
        
      </Routes>
    </BrowserRouter>

    
);
 }
export default App;