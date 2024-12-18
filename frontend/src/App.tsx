import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CLI from "./pages/CLI";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/resume" Component={CLI}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
