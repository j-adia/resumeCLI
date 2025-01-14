import CommandLine from "../components/CommandLine";
import { useState } from 'react';
import NavBar from '../components/NavBar';

function CLI() {  
  const [currentDir, setCurrentDir] = useState("");
  setCurrentDir("");
  
  return (
    <div className="CLI">
      <NavBar />
      <CommandLine currentDir={currentDir}/>
    </div>
  );
}

export default CLI;
