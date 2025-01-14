import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CLI from "./pages/CLI";

function App() {  
  return (
    // handle 404 on refresh
    <HashRouter>
        <Route path="/" element={<Home/>}/>
        <Route path="/resume" element={<CLI/>}></Route>
    </HashRouter>
  );
}

export default App;
