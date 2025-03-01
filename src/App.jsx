import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Signup from "./pages/Signup";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Routes> {}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
