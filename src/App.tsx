import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Company from "./pages/Company";
import Home from "./pages/Home";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path=":name" element={<Company />} />
          </Routes>
      </Router>
  );
}

export default App;
