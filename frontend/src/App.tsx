import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CLI from "./pages/CLI";

function App() {  
  return (
    // important! router needs this so it knows where the routes are
    <BrowserRouter basename="/resumeCLI/">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/resume" element={<CLI/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
