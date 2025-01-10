import CommandLine from "../components/CommandLine";
import { useState } from 'react';
import NavBar from '../components/NavBar';

function CLI() {  
  const [currentDir, setCurrentDir] = useState("");

  return (
    <div className="CLI">
      <NavBar />
      <CommandLine currentDir={currentDir} setCurrentDir={setCurrentDir}/>
    </div>
  );
}

export default CLI;
