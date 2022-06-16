import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";

import NavbarBootStrap from "./components/navbar/navbar.component";
import Homepage from "./pages/homepage/homepage.component";
// import Footer from "./components/footer/footer.component";

const App = () => (
  <div>
    <NavbarBootStrap />
    <Routes>
      <Route exact path="/" element={<Homepage />} />
    </Routes>
    {/* <Footer /> */}
  </div>
);

export default App;
