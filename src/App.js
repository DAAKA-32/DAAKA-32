import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from './Page/Intro';
import Home from './Page/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/src/Page/Intro.js" element={<Intro />} />
        <Route path="/src/Page/Home.js" element={<Home />} />
        <Route path="*" element={<Intro />} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        {/* <Route path="*" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;