import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CLI from "./pages/CLI";

function App() {  
  return (
    // handle 404 on refresh
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/resume" element={<CLI/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
